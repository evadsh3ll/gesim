"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function BackersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sponsor logos
      gsap.fromTo(
        ".sponsor-logo",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate team members
      gsap.fromTo(
        ".team-member",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const sponsors = [
    { name: "Sfermion", gradient: "from-purple-400 to-pink-400" },
    { name: "Volt Capital", gradient: "from-blue-400 to-cyan-400" },
    { name: "Psalion", gradient: "from-emerald-400 to-teal-400" },
    { name: "Starkware", gradient: "from-orange-400 to-red-400" },
    { name: "Typhon", gradient: "from-indigo-400 to-purple-400" },
    { name: "Foresight Ventures", gradient: "from-green-400 to-emerald-400" },
  ]

  const teamMembers = [
    { name: "Sebastian", company: "Sandbox", avatar: "S" },
    { name: "GiulioX", company: "Pixelmon", avatar: "G" },
    { name: "Christophe", company: "Request Finance", avatar: "C" },
    { name: "Leo Simon", company: "Telah VC", avatar: "L" },
    { name: "Mentor", company: "AVNU", avatar: "M" },
    { name: "Etienne", company: "Converse", avatar: "E" },
    { name: "Elias", company: "Kakarot zkEVM", avatar: "E" },
    { name: "Chen Zituo", company: "Wagmi Ventures", avatar: "C" },
    { name: "Antoine", company: "Google", avatar: "A" },
    { name: "Fricoben", company: "Starkurabu", avatar: "F" },
    { name: "Iris", company: "Starknet Quests", avatar: "I" },
    { name: "Thorgal", company: "Starknet ID", avatar: "T" },
    { name: "Nurstar", company: "Stark Cafe", avatar: "N" },
    { name: "Eni", company: "Starknet", avatar: "E" },
    { name: "Gurk", company: "StarkNet", avatar: "G" },
    { name: "Ramzi", company: "Carbonable", avatar: "R" },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            We are proudly <Heart className="inline w-8 h-8 text-red-500 mx-2" /> backed by
          </h2>
        </div>

        {/* Main Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="sponsor-logo flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Sfermion
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="sponsor-logo flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">Volt Capital</div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Secondary Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {sponsors.slice(2).map((sponsor, index) => (
            <div key={sponsor.name} className="sponsor-logo text-center">
              <div className={`text-xl font-bold bg-gradient-to-r ${sponsor.gradient} bg-clip-text text-transparent`}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-4 md:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="team-member text-center">
              <Avatar className="w-16 h-16 mx-auto mb-3 shadow-lg">
                <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-bold text-lg">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm font-medium text-slate-900 mb-1">{member.name}</div>
              <div className="text-xs text-slate-500">{member.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
