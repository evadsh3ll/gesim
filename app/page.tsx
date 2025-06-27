"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/hero-section"
import ScrollingSections from "@/components/scrolling-sections"
import BackersSection from "@/components/backers-section"
import Footer from "@/components/footer"
import { GesimBentoGrid, TrustedBy } from "@/components/gesim-bento-grid"
import { FeaturesCarousel } from "@/components/features-carousel"
import ImageTrail from "@/components/ImageTrail/ImageTrail"
import WhoIsGeSIMFor from "@/components/GridMotion/WhoIsGeSIMFor"
import FAQChat from "@/components/FAQChat"

gsap.registerPlugin(ScrollTrigger)

export default function GesimLanding() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const heroPhoneRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero phone animation
      gsap.fromTo(
        heroPhoneRef.current,
        { y: 100, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      // Improved phone screen transitions with sliding and blur effects
      const phoneScreens = [
        { id: "timer-screen", trigger: ".timer-section", index: 0 },
        { id: "garden-screen", trigger: ".garden-section", index: 1 },
        { id: "distraction-screen", trigger: ".distraction-section", index: 2 },
        { id: "earn-screen", trigger: ".earn-section", index: 3 },
      ]

      phoneScreens.forEach((screen, index) => {
        const currentScreen = document.getElementById(screen.id)
        const nextScreen = phoneScreens[index + 1] ? document.getElementById(phoneScreens[index + 1].id) : null

        if (currentScreen) {
          // Set initial positions
          if (index === 0) {
            gsap.set(currentScreen, { y: 0, opacity: 1, filter: "blur(0px)" })
          } else {
            gsap.set(currentScreen, { y: -100, opacity: 0, filter: "blur(0px)" })
          }
        }

        ScrollTrigger.create({
          trigger: screen.trigger,
          start: "top center+=100",
          end: "bottom center-=100",
          scrub: 1.5,
          onUpdate: (self) => {
            const progress = self.progress

            if (currentScreen) {
              // Current screen slides down and blurs as we scroll
              gsap.to(currentScreen, {
                y: progress * 100,
                opacity: 1 - progress * 0.7,
                filter: `blur(${progress * 8}px)`,
                duration: 0.3,
                ease: "none",
              })
            }

            // Next screen slides in from top
            if (nextScreen && progress > 0.3) {
              const nextProgress = Math.max(0, (progress - 0.3) / 0.7)
              gsap.to(nextScreen, {
                y: -100 + nextProgress * 100,
                opacity: nextProgress,
                filter: `blur(${(1 - nextProgress) * 5}px)`,
                duration: 0.3,
                ease: "none",
              })
            }
          },
          onEnter: () => {
            // Ensure current screen is visible when entering
            if (currentScreen) {
              gsap.to(currentScreen, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
          },
          onLeave: () => {
            // Smoothly transition to next screen
            if (nextScreen) {
              gsap.to(nextScreen, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
            if (currentScreen) {
              gsap.to(currentScreen, {
                y: 100,
                opacity: 0,
                filter: "blur(8px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
          },
          onEnterBack: () => {
            // Smooth transition back to current screen
            if (currentScreen) {
              gsap.to(currentScreen, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
            if (nextScreen) {
              gsap.to(nextScreen, {
                y: -100,
                opacity: 0,
                filter: "blur(5px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
          },
          onLeaveBack: () => {
            // Previous screen comes back
            const prevScreen = phoneScreens[index - 1] ? document.getElementById(phoneScreens[index - 1].id) : null
            if (prevScreen) {
              gsap.to(prevScreen, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
            if (currentScreen) {
              gsap.to(currentScreen, {
                y: -100,
                opacity: 0,
                filter: "blur(5px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
          },
        })
      })

      // Section animations
      gsap.utils.toArray(".animate-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Enhanced floating animation for phone
      gsap.to(phoneRef.current, {
        y: -15,
        rotation: 1,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Add subtle parallax to phone container
      gsap.to(phoneRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Bento Grid Section - Replaces ScrollReveal */}
      <GesimBentoGrid />

      {/* Sections with sticky phone */}
      {/* <ScrollingSections /> */}
      <FeaturesCarousel />
      {/* Backers Section */}
      {/* <BackersSection /> */}
<WhoIsGeSIMFor />
      {/* Footer */}
    <FAQChat />
      <Footer />
    </div>
  )
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-64 h-[520px]">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          {/* Screen Content */}
          <div className="w-full h-full relative">{children}</div>
        </div>
      </div>
    </div>
  )
}
