"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollingSections() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Phone screen transitions with sliding and blur effects
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
              gsap.to(currentScreen, {
                y: progress * 100,
                opacity: 1 - progress * 0.7,
                filter: `blur(${progress * 8}px)`,
                duration: 0.3,
                ease: "none",
              })
            }

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
            if (nextScreen) {
              gsap.to(nextScreen, {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power2.out",
              })
            }
          },
          onEnterBack: () => {
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
        })
      })

      // Section animations
      gsap.utils.toArray(".animate-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Floating phone animation
      gsap.to(phoneRef.current, {
        y: -20,
        rotation: 2,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionsRef} className="relative bg-black">
      <div className="container mx-auto max-w-7xl px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Sticky Phone */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div ref={phoneRef} className="flex justify-center">
              <PhoneMockup>
                {/* Timer Screen */}
                <div id="timer-screen" className="phone-screen absolute inset-0 will-change-transform">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="text-sm opacity-80 mb-4">Set timer</div>
                    <div className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center mb-6">
                      <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">45</span>
                      </div>
                    </div>
                    <div className="text-xl opacity-90 mb-8">min</div>
                    <Button className="bg-black text-white rounded-full px-10 py-3">Set</Button>
                  </div>
                </div>

                {/* Garden Screen */}
                <div id="garden-screen" className="phone-screen absolute inset-0 will-change-transform">
                  <div className="bg-gradient-to-br from-pink-400 to-orange-500 h-full p-8">
                    <div className="bg-white/20 rounded-3xl h-full flex flex-col items-center justify-center text-white backdrop-blur-sm">
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-10 h-10 bg-white/30 rounded-xl"></div>
                        ))}
                      </div>
                      <div className="text-xl font-semibold mb-2">🌸 The Dream Team</div>
                      <div className="text-sm opacity-90">Digital Garden</div>
                    </div>
                  </div>
                </div>

                {/* Distraction Screen */}
                <div id="distraction-screen" className="phone-screen absolute inset-0 will-change-transform">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="w-40 h-40 bg-white/20 rounded-3xl mb-8 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl"></div>
                    </div>
                    <div className="text-xl font-semibold mb-3">Block Mode Active</div>
                    <div className="text-sm opacity-90 text-center">All distractions blocked</div>
                  </div>
                </div>

                {/* Earn Screen */}
                <div id="earn-screen" className="phone-screen absolute inset-0 will-change-transform">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-600 h-full flex flex-col items-center justify-center text-white p-8">
                    <div className="text-6xl mb-6">🏆</div>
                    <div className="text-3xl font-bold mb-3">08:12</div>
                    <div className="text-sm opacity-90 mb-8">Session Complete!</div>
                    <Button className="bg-white text-orange-600 rounded-full px-8 py-3">Collect Reward</Button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-40">
            {/* Timer Section */}
            <section className="timer-section animate-section">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Step</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight font-light">Set Focus Timer</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Set the timer before starting your focus session. When you're ready, click on "Focus".
              </p>
            </section>

            {/* Garden Section */}
            <section className="garden-section animate-section">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Step</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight font-light">Build your Digital Garden</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                Use the items you've earned to build your digital garden. You can also invite your friends & build it
                together.
              </p>

              {/* Enhanced Leaderboard */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-6">🏆 Top Focusers</h3>
                  <div className="space-y-5">
                    {[
                      { name: "Alex", time: "2h 15m", rank: 1, color: "bg-yellow-100 text-yellow-700" },
                      { name: "Sarah", time: "1h 45m", rank: 2, color: "bg-gray-100 text-gray-700" },
                      { name: "Mike", time: "1h 30m", rank: 3, color: "bg-orange-100 text-orange-700" },
                      { name: "Emma", time: "1h 20m", rank: 4, color: "bg-emerald-100 text-emerald-700" },
                    ].map((user) => (
                      <div key={user.name} className="flex items-center gap-5">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${user.color}`}
                        >
                          {user.rank}
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                            {user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold text-white">{user.name}</div>
                        </div>
                        <div className="text-sm font-medium text-gray-300">{user.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Distraction Section */}
            <section className="distraction-section animate-section">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Step</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight font-light">Block Distractions</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Once the focus session is launched, we'll block all digital distractions. If you use your phone for
                something else (Instagram, TikTok etc.), you fail the session.
              </p>
            </section>

            {/* Earn Section */}
            <section className="earn-section animate-section">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Step</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight font-light">Earn Items</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                At the end of a successful focus session, you can discover your reward. More you focus, more items you
                earn!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-72 h-[580px]">
      <div className="absolute inset-0 bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10"></div>
          <div className="w-full h-full relative">{children}</div>
        </div>
      </div>
    </div>
  )
}
