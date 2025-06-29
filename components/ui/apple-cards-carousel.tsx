"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
  JSX,
} from "react";
import {
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Cache DOM measurements to avoid recalculating on every scroll
  const measurements = useRef({
    cardWidth: 0,
    gap: 32,
    totalWidth: 0,
    maxScroll: 0,
    containerHeight: 0,
    viewportHeight: 0,
    viewportWidth: 0,
  });

  // Throttle state - Fixed: Changed from number | undefined to number
  const lastScrollTime = useRef(0);
  const animationFrame = useRef<number | null>(null);

  // Easing function (moved outside to avoid recreation)
  const easeInOutCubic = useCallback((t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }, []);

  // Cache measurements on mount and resize
  const updateMeasurements = useCallback(() => {
    if (!carouselRef.current || !containerRef.current) return;

    const carousel = carouselRef.current;
    const container = containerRef.current;
    
    measurements.current = {
      cardWidth: window.innerWidth < 768 ? 320 : 448,
      gap: 32,
      totalWidth: 0,
      maxScroll: 0,
      containerHeight: container.clientHeight,
      viewportHeight: window.innerHeight,
      viewportWidth: carousel.clientWidth,
    };

    const totalCards = carousel.children[0]?.children.length || items.length;
    measurements.current.totalWidth = (measurements.current.cardWidth + measurements.current.gap) * totalCards;
    measurements.current.maxScroll = Math.max(0, measurements.current.totalWidth - measurements.current.viewportWidth);
  }, [items.length]);

  // Optimized scroll handler with better throttling
  const handleScroll = useCallback(() => {
    const now = performance.now();
    
    // Throttle to ~60fps max
    if (now - lastScrollTime.current < 16) return;
    lastScrollTime.current = now;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (!carouselRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const carousel = carouselRef.current;
      const containerRect = container.getBoundingClientRect();
      const { viewportHeight, maxScroll } = measurements.current;
      
      // Quick viewport check
      if (containerRect.top > 0 || containerRect.bottom < viewportHeight) return;
      
      // Calculate scroll progress more efficiently
      const scrollProgress = Math.abs(containerRect.top) / (containerRect.height - viewportHeight);
      const clampedProgress = Math.min(1, Math.max(0, scrollProgress));
      
      if (clampedProgress === 0 || clampedProgress === 1) return;
      
      const easedProgress = easeInOutCubic(clampedProgress);
      const targetScroll = easedProgress * maxScroll;
      
      // Use transform instead of scrollLeft for better performance
      const carouselContent = carousel.children[0] as HTMLElement;
      if (carouselContent) {
        carouselContent.style.transform = `translateX(-${targetScroll}px)`;
      }
    });
  }, [easeInOutCubic]);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      updateMeasurements();
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [updateMeasurements]);

  useEffect(() => {
    updateMeasurements();
    
    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleScroll, handleResize]);

  const handleCardClose = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div 
        ref={containerRef}
        className="relative w-full"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div
            className="flex w-full py-10 md:py-20"
            ref={carouselRef}
            style={{ 
              overflow: 'hidden', // Changed from overflow-x-scroll
            }}
          >
            <div
              className={cn(
                "flex flex-row justify-start gap-8 pl-8",
                "mx-auto max-w-none transition-transform duration-0", // Added transition control
              )}
              style={{ 
                width: 'max-content',
                willChange: 'transform', // Optimize for transforms
              }}
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 * index, // Reduced delay for faster loading
                      ease: "easeOut",
                      // Removed 'once' property as it doesn't exist in motion/react
                    },
                  }}
                  key={"card" + index}
                  className="rounded-3xl flex-shrink-0"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Fixed: Handle the case where containerRef.current might be null
  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-[30rem] w-80 flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-[45rem] md:w-[28rem] dark:bg-neutral-900 flex-shrink-0"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-full bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-10 md:p-12">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-base font-medium text-white md:text-lg"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-3 max-w-sm text-left font-sans text-2xl font-semibold [text-wrap:balance] text-white md:text-4xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  
  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={handleLoad}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};