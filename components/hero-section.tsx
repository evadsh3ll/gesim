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
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left content - reduced spacing */}
          <div ref={textRef} className="space-y-6 lg:pr-12">
            <Badge className="inline-flex bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm font-semibold">
              ✨ eSIM, Reinvented
            </Badge>

            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
              Connect globally, pay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
                locally
              </span>
            </h1>

            {/* <p className="text-2xl lg:text-3xl font-light text-slate-700 leading-relaxed max-w-2xl mb-6">
              Travel globally, pay{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 font-semibold">
                locally
              </span>
            </p> */}

            {/* User avatars section */}
            <div className="flex items-center gap-6 pt-6">
            <div className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>         
         <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <div className="flex items-baseline gap-1">
                  <CountUp 
                    from={0}
                    to={60}
                    separator=","
                    direction="up"
                    duration={2}
                    className="text-3xl font-bold text-slate-900"
                  />
                  <span className="text-2xl font-bold text-blue-600">+</span>
                </div>
                <div className="text-slate-600 font-medium text-sm">
                  people registered
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4"> */}

              <Magnet padding={250} disabled={false} magnetStrength={10}>
                {/* <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"> */}
                  {/* <Timer className="w-5 h-5 mr-3" /> */}
            <InteractiveHoverButton>

                  Join the waitlist now
            </InteractiveHoverButton>
                {/* </Button> */}
              </Magnet>
            {/* </div> */}
          </div>

          {/* Right phone mockup - exact positioning and tilt */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={phoneRef}
              className="relative"
              style={{
                transform: "perspective(1000px) rotateY(-15deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <PhoneMockupHero />
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}
