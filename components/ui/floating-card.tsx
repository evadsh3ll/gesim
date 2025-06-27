"use client"

import { motion } from "motion/react"
import type React from "react"

interface FloatingCardProps {
  label: string // like "Web3 ID" or "Web3 Wallet"
  main: string // like "Canada" or "13.25 GB"
  sub?: string // optional second line
  style?: React.CSSProperties
  animationDelay?: number
  className?: string
}

export function FloatingCard({
  label,
  main,
  sub,
  style,
  animationDelay = 0,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.8,
        rotate: style?.transform ? Number.parseFloat(style.transform.split("rotate(")[1]) : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: style?.transform ? Number.parseFloat(style.transform.split("rotate(")[1]) : 0,
      }}
      transition={{
        duration: 0.8,
        delay: animationDelay,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`absolute z-[30] ${className} rounded-xl p-4 backdrop-blur-xl shadow-xl border border-white/20 bg-white/10 text-white w-[200px]`}
      style={style}
    >
      <div className="text-xs text-white/60 mb-1">{label}</div>
      <div className="text-lg font-semibold text-white">{main}</div>
      {sub && <div className="text-sm text-white/80 mt-1">{sub}</div>}
    </motion.div>
  )
}
