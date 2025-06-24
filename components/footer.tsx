"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Gesim app is now available</h2>
          <div className="flex justify-center gap-4 mb-12">
            <Button className="bg-white text-black hover:bg-slate-100 px-8 py-6 text-lg rounded-full font-semibold">
              <Apple className="w-5 h-5 mr-3" />
              Download for iOS
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full font-semibold"
            >
              <Play className="w-5 h-5 mr-3" />
              Download for Android
            </Button>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Follow us on Twitter</h3>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Twitter className="w-4 h-4 mr-2" />
              @gesim_app • 162,000+ Followers
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="py-12">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold">Gesim</span>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">© 2024 Gesim. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  )
}
