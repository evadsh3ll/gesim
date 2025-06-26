"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play, Twitter } from "lucide-react"
import { Vortex } from "@/components/ui/vortex"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-10 min-h-[400px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
        <Vortex className="w-full h-full" backgroundColor="black" />
      </div>
      <section className="relative z-10 py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Join waitlist to get early access</h2>
        <InteractiveHoverButton className="mt-4 bg-blue-600 text-white px-8 py-4 text-lg rounded-full font-semibold shadow-xl border-0">
          Join Waitlist
        </InteractiveHoverButton>
        <div className="flex justify-center gap-8 mt-10">
          <a href="https://twitter.com/gesim_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors text-lg">
            <Twitter className="w-5 h-5" /> Twitter
          </a>
          <a href="https://t.me/gesimapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors text-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M9.036 15.472l-.396 4.01c.568 0 .814-.244 1.112-.537l2.664-2.53 5.522 4.03c1.012.557 1.73.264 1.98-.937l3.594-16.84c.327-1.51-.547-2.1-1.53-1.74L1.36 9.47c-1.48.58-1.46 1.41-.252 1.78l4.32 1.35 10.04-6.33c.472-.29.902-.13.548.16" fill="currentColor"/></svg>
            Telegram
          </a>
        </div>
      </section>
      <section className="relative z-10 py-8 border-t border-slate-800 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold">Gesim</span>
          </div>
          <p className="text-slate-200 mt-2">© 2025 Gesim. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}
