"use client"
import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"

export function GesimBentoGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">

          {/* Main Feature Card */}
          {/* Main Feature Card — Mobile Image */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-600 min-h-[500px] lg:min-h-[400px]"
          >
        <div className="max-w-xs">
        <div className="max-w-lg flex-1 z-10">
                <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                  Redefining Mobile Data Access Worldwide
                </h2>
                <p className="mt-4 text-left text-lg text-white/90 leading-relaxed">
                  No more roaming shock. No KYC friction. No nonsense.
                </p>
                <p className="mt-2 text-left text-base text-white/80">
                  Smart. Secure. Seamless. Global mobile data with GeSIM
                </p>
              </div>

              {/* 🔥 Image peeking from bottom-right, 60% visible, with blurred border effect */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[300px] overflow-visible z-0 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src="/mobile-bento.png"
                    alt="GeSIM mobile app"
                    width={280}
                    height={560}
                    className="absolute bottom-0 right-0 object-cover"
                    priority
                  />
                  {/* Blurred border overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[32px] z-10"
                    style={{
                      boxShadow:
                        "0 0 40px 20px rgba(37,99,235,0.45), 0 0 80px 40px rgba(37,99,235,0.25)",
                      // blue-600: rgb(37,99,235)
                      maskImage:
                        "radial-gradient(ellipse 90% 90% at 50% 50%, #000 70%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 90% 90% at 50% 50%, #000 70%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </WobbleCard>

          {/* Global Coverage Card */}
          <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-pink-600">
            <div className="h-full flex flex-col justify-center">
              <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4">
                180+ Countries
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base text-white/80 leading-relaxed">
                Seamless connectivity across the globe. One eSIM, unlimited possibilities.
              </p>
            </div>
          </WobbleCard>

          {/* Crypto & Privacy Card — eSIM Image */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-emerald-600 min-h-[400px] lg:min-h-[300px]">
          <div className="max-w-xm">
          <div className="max-w-2xl flex-1">
                <h2 className="max-w-4xl text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4">
                  Crypto-Powered Privacy & Automatic Billing
                </h2>
                <p className="mt-4 max-w-3xl text-left text-base text-white/80 leading-relaxed">
                  Pay with crypto or fiat, get billed automatically based on usage. No KYC required, no surprises, no
                  borders. Complete privacy with cutting-edge eSIM technology.
                </p>
              </div>

              {/* ✅ Clean eSIM image touching right edge */}
              <div className="flex-1 flex justify-end items-center h-full pr-0">
                <Image
                  src="/esim-bento.png"
                  alt="eSIM tech with crypto"
                  width={350}
                  height={350}
                  className="object-contain w-[280px] h-auto"
                  priority
                />
              </div>
            </div>
          </WobbleCard>


        </div>
      </div>
    </section>
  )
}
