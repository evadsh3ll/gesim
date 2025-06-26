"use client"
import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import ThreeGlobe from "three-globe"
import { Color } from "three"
import countries from "@/data/globe.json"
import type * as THREE from "three"

type Position = {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

export type GlobeConfig = {
  pointSize?: number
  globeColor?: string
  showAtmosphere?: boolean
  atmosphereColor?: string
  atmosphereAltitude?: number
  emissive?: string
  emissiveIntensity?: number
  shininess?: number
  polygonColor?: string
  ambientLight?: string
  directionalLeftLight?: string
  directionalTopLight?: string
  pointLight?: string
  arcTime?: number
  arcLength?: number
  rings?: number
  maxRings?: number
  initialPosition?: {
    lat: number
    lng: number
  }
  autoRotate?: boolean
  autoRotateSpeed?: number
}

interface WorldProps {
  globeConfig: GlobeConfig
  data: Position[]
}

function GlobeComponent({ globeConfig, data }: WorldProps) {
  const mountRef = useRef<THREE.Group | null>(null)
  const globeRef = useRef<ThreeGlobe | undefined>(undefined)

  useEffect(() => {
    if (!mountRef.current) return

    // Create globe
    const globe = new ThreeGlobe()
    globeRef.current = globe
    mountRef.current.add(globe)

    // Configure globe appearance
    const globeMaterial = globe.globeMaterial() as any
    globeMaterial.color = new Color(globeConfig.globeColor || "#ffffff")
    globeMaterial.emissive = new Color(globeConfig.emissive || "#000000")
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.15
    globeMaterial.shininess = globeConfig.shininess || 1.2

    // Set up basic globe features
    globe
      .showAtmosphere(globeConfig.showAtmosphere !== false)
      .atmosphereColor(globeConfig.atmosphereColor || "#e0e7ef")
      .atmosphereAltitude(globeConfig.atmosphereAltitude || 0.18)
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => globeConfig.polygonColor || "rgba(0,0,0,0.12)")
      .polygonStrokeColor(() => "#222")

    // Add arcs if data is provided
    if (data && data.length > 0) {
      globe
        .arcsData(data)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((d: any) => d.color)
        .arcAltitude((d: any) => d.arcAlt)
        .arcStroke(0.3)
        .arcDashLength(globeConfig.arcLength || 0.9)
        .arcDashGap(15)
        .arcDashAnimateTime(globeConfig.arcTime || 1000)

      // Add points
      const points = data.flatMap((arc) => [
        { lat: arc.startLat, lng: arc.startLng, color: arc.color },
        { lat: arc.endLat, lng: arc.endLng, color: arc.color },
      ])

      // Remove duplicates
      const uniquePoints = points.filter(
        (point, index, arr) => arr.findIndex((p) => p.lat === point.lat && p.lng === point.lng) === index,
      )

      globe
        .pointsData(uniquePoints)
        .pointColor((d: any) => d.color)
        .pointAltitude(0)
        .pointRadius(2)
    }

    return () => {
      if (mountRef.current && globeRef.current) {
        mountRef.current.remove(globeRef.current)
      }
    }
  }, [globeConfig, data])

  return <group ref={mountRef} />
}

export function World(props: WorldProps) {
  const { globeConfig } = props

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight color={globeConfig.ambientLight || "#ffffff"} intensity={0.6} />
        <directionalLight
          color={globeConfig.directionalLeftLight || "#ffffff"}
          position={[-400, 100, 400]}
          intensity={0.8}
        />
        <directionalLight
          color={globeConfig.directionalTopLight || "#ffffff"}
          position={[-200, 500, 200]}
          intensity={0.8}
        />
        <pointLight color={globeConfig.pointLight || "#ffffff"} position={[-200, 500, 200]} intensity={0.8} />
        <GlobeComponent {...props} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={globeConfig.autoRotate !== false}
          autoRotateSpeed={globeConfig.autoRotateSpeed || 0.5}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
