"use client"
import { motion } from "motion/react"
import dynamic from "next/dynamic"
import { FloatingCard } from "./ui/floating-card"

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  ),
})

const cardData = [
  {
    id: "1",
    title: "Global Network",
    description: "Connect seamlessly across continents with our worldwide infrastructure.",
    style: { top: "15%", left: "10%", transform: "rotate(-8deg)", zIndex: 50 },
    className: "w-64 sm:w-72",
    animationDelay: 0.2,
  },
  {
    id: "2",
    title: "Real-time Analytics",
    description: "Monitor your global operations with live data visualization and insights.",
    style: { top: "25%", right: "8%", transform: "rotate(6deg)", zIndex: 50 },
    className: "w-64 sm:w-72",
    animationDelay: 0.4,
  },
  {
    id: "3",
    title: "Smart Automation",
    description: "AI-powered systems that adapt and optimize your global workflows.",
    style: { bottom: "30%", left: "12%", transform: "rotate(4deg)", zIndex: 50 },
    className: "w-64 sm:w-72",
    animationDelay: 0.6,
  },
  {
    id: "4",
    title: "Secure Infrastructure",
    description: "Enterprise-grade security protecting your data across all regions.",
    style: { bottom: "20%", right: "10%", transform: "rotate(-5deg)", zIndex: 50 },
    className: "w-64 sm:w-72",
    animationDelay: 0.8,
  },
]

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a1628",
    showAtmosphere: true,
    atmosphereColor: "#3b82f6",
    atmosphereAltitude: 0.2,
    emissive: "#1e40af",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(59, 130, 246, 0.4)",
    ambientLight: "#60a5fa",
    directionalLeftLight: "#93c5fd",
    directionalTopLight: "#dbeafe",
    pointLight: "#3b82f6",
    arcTime: 2000,
    arcLength: 0.8,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.8,
  }

  const colors = ["#3b82f6", "#06b6d4", "#8b5cf6", "#10b981"]
  const sampleArcs = [
    { order: 1, startLat: -19.88, startLng: -43.95, endLat: -22.9, endLng: -43.17, arcAlt: 0.15, color: colors[0] },
    { order: 1, startLat: 28.61, startLng: 77.2, endLat: 3.13, endLng: 101.68, arcAlt: 0.25, color: colors[1] },
    { order: 2, startLat: 51.5, startLng: -0.12, endLat: 3.13, endLng: 101.68, arcAlt: 0.35, color: colors[2] },
    { order: 3, startLat: -33.86, startLng: 151.2, endLat: 22.31, endLng: 114.16, arcAlt: 0.3, color: colors[3] },
    { order: 4, startLat: 11.98, startLng: 8.57, endLat: -15.59, endLng: -56.05, arcAlt: 0.45, color: colors[0] },
    { order: 5, startLat: 1.35, startLng: 103.81, endLat: -33.86, endLng: 151.2, arcAlt: 0.2, color: colors[1] },
    { order: 6, startLat: 37.77, startLng: -122.41, endLat: 40.71, endLng: -74.0, arcAlt: 0.3, color: colors[2] },
    { order: 7, startLat: 35.68, startLng: 139.65, endLat: 55.75, endLng: 37.61, arcAlt: 0.4, color: colors[3] },
    { order: 8, startLat: 52.52, startLng: 13.405, endLat: 34.05, endLng: -118.24, arcAlt: 0.5, color: colors[0] },
    { order: 9, startLat: -34.6, startLng: -58.38, endLat: 22.31, endLng: 114.16, arcAlt: 0.6, color: colors[1] },
  ]

  return (
    <div className="relative w-full h-[44rem] flex items-center justify-end pr-[8vw]">
      {/* Blue glow behind globe */}
      <div className="absolute right-[18vw] top-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-blue-500/20 rounded-full blur-3xl z-0" />
      {/* Globe right-aligned and large */}
      <div className="relative z-10 w-[38rem] h-[38rem] flex items-center justify-center" style={{marginRight: 0}}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
      {/* Floating Cards - absolutely positioned around the globe, touching the edge */}
      {/* Card 1: Top Left (above globe) */}
      <div className="absolute z-20" style={{ top: '8%', right: '38vw' }}>
        <FloatingCard
          title={cardData[0].title}
          description={cardData[0].description}
          className="w-56"
          style={{ animation: 'floatCard 4s ease-in-out 0s infinite alternate' }}
        />
      </div>
      {/* Card 2: Top Right (behind globe) */}
      <div className="absolute z-5" style={{ top: '14%', right: '13vw' }}>
        <FloatingCard
          title={cardData[1].title}
          description={cardData[1].description}
          className="w-56 opacity-90"
          style={{ animation: 'floatCard 4s ease-in-out 1s infinite alternate', filter: 'blur(0.5px)' }}
        />
      </div>
      {/* Card 3: Bottom Left (above globe) */}
      <div className="absolute z-20" style={{ bottom: '13%', right: '39vw' }}>
        <FloatingCard
          title={cardData[2].title}
          description={cardData[2].description}
          className="w-56"
          style={{ animation: 'floatCard 4s ease-in-out 2s infinite alternate' }}
        />
      </div>
      {/* Card 4: Bottom Right (above globe) */}
      <div className="absolute z-20" style={{ bottom: '8%', right: '14vw' }}>
        <FloatingCard
          title={cardData[3].title}
          description={cardData[3].description}
          className="w-56"
          style={{ animation: 'floatCard 4s ease-in-out 3s infinite alternate' }}
        />
      </div>
      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes floatCard {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-18px) scale(1.04); }
        }
      `}</style>
    </div>
  )
}
