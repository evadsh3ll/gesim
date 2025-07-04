"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Apple, Play, Timer } from "lucide-react"
import Threads from "./ui/Threads/Threads"
import Image from "next/image"
import Magnet from "./ui/Magnet/Magnet"
import CountUp from "./CountUp"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {InteractiveHoverButton} from "./magicui/interactive-hover-button";
import dynamic from "next/dynamic"
import { FloatingCard } from "./ui/floating-card";
import { AuroraText } from "./magicui/aurora-text"
import Stepper, { Step } from "./Stepper/Stepper";
import { useState } from "react";
const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});
 
const globeConfig = {
  pointSize: 4,
  globeColor: "#0b59f6",                // core globe color (deep blue)
  showAtmosphere: true,
  atmosphereColor: "#43c0ff",           // glow around globe (neon blue)
  atmosphereAltitude: 0.18,
  emissive: "#1e3a8a",                  // deeper navy blue
  emissiveIntensity: 0.2,
  shininess: 1.4,
  polygonColor: "rgba(255,255,255,0.85)",
  ambientLight: "#60a5fa",              // soft sky blue
  directionalLeftLight: "#93c5fd",      // light blue
  directionalTopLight: "#bfdbfe",       // pale blue
  pointLight: "#ffffff",                // white
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
// import GlobeDemo from "./globe-component"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [showStepper, setShowStepper] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text animations
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.3,
        },
      )

      // Phone entrance with exact tilt and positioning
      gsap.fromTo(
        phoneRef.current,
        {
          y: 100,
          opacity: 0,
          rotateY: -25,
          rotateX: 5,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotateY: -15,
          rotateX: 2,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.8,
        },
      )

      // Floating animation
      gsap.to(phoneRef.current, {
        y: -20,
        rotateY: -12,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Parallax background elements
      gsap.to(".bg-element", {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-element absolute top-20 left-10 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="bg-element absolute top-40 right-20 w-48 h-48 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="bg-element absolute bottom-40 left-1/4 w-24 h-24 bg-purple-100/40 rounded-full blur-2xl"></div>
      </div>

      {/* Threads background component */}
      <div className="absolute inset-0 pointer-events-none">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Header with reduced spacing and actual logo */}
      <header className="absolute top-0 left-0 w-full z-50 p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image
              src="/gesim_logo.jpeg"
              alt="GeSIM Logo"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight">GeSIM</span>
        </div>
      </header>

      <div className="container mx-auto px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center min-h-[80vh]">
          {/* Left content - reduced spacing */}
          <div ref={textRef} className="flex-1 space-y-6 lg:pr-12">
           
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black font-sans md:font-display text-left drop-shadow-xl leading-tight">
              One <AuroraText>eSIM</AuroraText><br />for the world
            </h1>
            <span className="block mt-2 text-lg md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-blue-600 to-emerald-400 bg-clip-text text-transparent text-left drop-shadow-md">
              Connect globally, pay locally
            </span>
            {/* Stepper/Button logic */}
            {showStepper ? (
              <Stepper
                initialStep={1}
                onStepChange={(step) => {
                  console.log(step);
                }}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <Step>
                  <h2>Welcome to GeSIM!</h2>
                  <p>Get started with your global eSIM journey.</p>
                </Step>
                <Step>
                  <h2>Choose your plan</h2>
                  <p>Select a data plan that fits your travel needs.</p>
                </Step>
                <Step>
                  <h2>Activate instantly</h2>
                  <p>Scan the QR code and connect worldwide.</p>
                </Step>
                <Step>
                  <h2>You're all set!</h2>
                  <p>Enjoy seamless connectivity in 180+ countries.</p>
                </Step>
              </Stepper>
            ) : (
              <Magnet padding={250} disabled={false} magnetStrength={10}>
                <InteractiveHoverButton onClick={() => setShowStepper(true)}>
                  Join the waitlist now
                </InteractiveHoverButton>
              </Magnet>
            )}
          </div>
          {/* Right content - GlobeDemo */}
          <div className="w-[340px] md:w-[500px] lg:w-[700px] flex justify-center items-center min-h-[350px] md:min-h-[500px] lg:min-h-[800px] relative">
            <div className="relative w-full aspect-square max-w-[340px] md:max-w-[500px] lg:max-w-[700px] mx-auto">
              {/* Card: Top Right */}
              <FloatingCard
                label="Web3 ID"
                main="Canada"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "70%",
                  zIndex: 30,
                  transform: "rotate(-6deg) translate(-50%, -50%)",
                  width: "160px",
                }}
                animationDelay={0.3}
              />
              {/* Card: Top Left */}
              <FloatingCard
                label="Web3 Wallet"
                main="13.25 GB"
                sub="$7.33 USD"
                style={{
                  position: "absolute",
                  top: '18%',
                  left: '28%',
                  transform: 'rotate(6deg) translate(-50%, -50%)',
                  zIndex: 20,
                  width: '160px',
                }}
                animationDelay={0.4}
              />
              {/* Card: Bottom Right */}
              <FloatingCard
                label="Region"
                main="APAC"
                style={{
                  position: "absolute",
                  top: '75%',
                  left: '35%',
                  transform: 'rotate(-4deg) translate(-50%, -50%)',
                  zIndex: 20,
                  width: '160px',
                }}
                animationDelay={0.6}
              />
              {/* Globe Component */}
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div>
      <section className="w-full py-10 bg-white/80 backdrop-blur-md flex flex-col items-center">
      <div className="text-lg font-semibold text-slate-500 mb-4 tracking-wide">Trusted by</div>
      <div className="flex items-center justify-center gap-8 px-4 py-6 rounded-2xl bg-white/60 shadow-md border border-slate-100/60" style={{ minWidth: 180 }}>
        <Image src="/airalo.png" alt="Airalo" width={95} height={28} className="object-contain" />
      </div>
    </section>
      </div>
    </section>
  )
}

function PhoneMockupHero() {
  return (
    <div className="relative w-80 h-[640px] drop-shadow-2xl">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10"></div>

          {/* Screen Content - updated to blue theme */}
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-500 relative">
            {/* Top UI elements */}
            <div className="absolute top-12 right-6 space-y-3">
              <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm">
                <div className="text-white text-xs font-medium">Wallet</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="text-white text-sm font-bold">1749.05</div>
                  <div className="w-5 h-5 bg-orange-400 rounded-full"></div>
                </div>
                <div className="text-white/80 text-xs">ETH</div>
                <div className="flex items-center gap-1 mt-2">
                  <div className="text-white text-xs">0.037</div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm">
                <div className="text-white text-xs">Good morning</div>
                <div className="bg-blue-400 rounded-lg px-3 py-1 mt-1">
                  <div className="text-white text-xs font-medium">Send</div>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm">
                <div className="text-white text-xs">Let's focus</div>
              </div>

              <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm">
                <div className="text-white text-xs">Your collection</div>
                <div className="w-8 h-8 bg-purple-400 rounded-lg mt-1"></div>
              </div>
            </div>

            {/* Center 3D Tree */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-6xl">🌸</div>
              </div>
            </div>

            {/* Bottom timer section */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-white text-4xl font-bold mb-4">25:00</div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 rounded-full text-lg font-semibold shadow-xl">
                Focus
              </Button>
            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-white/30 rounded-lg"></div>
              ))}
            </div>

            {/* Side collection items */}
            <div className="absolute right-6 bottom-32 space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl shadow-lg"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl shadow-lg"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl shadow-lg"></div>
            </div>
          </div>
        </div>
        {/* <section className="w-full py-10 bg-white/80 backdrop-blur-md flex flex-col items-center">
      <div className="text-lg font-semibold text-slate-500 mb-4 tracking-wide">Trusted by</div>
      <div className="flex items-center justify-center gap-8 px-4 py-6 rounded-2xl bg-white/60 shadow-md border border-slate-100/60" style={{ minWidth: 180 }}>
        <Image src="/airalo.png" alt="Airalo" width={95} height={28} className="object-contain" />
      </div>
    </section> */}
      </div>
    </div>
  )
}
