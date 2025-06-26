"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "motion/react"
import type React from "react"

interface FloatingCardProps {
  title: string
  description: string
  className?: string
  style?: React.CSSProperties
  animationDelay?: number
}

export function FloatingCard({ title, description, className, style, animationDelay = 0 }: FloatingCardProps) {
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
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`absolute ${className} cursor-pointer`}
      style={style}
    >
      <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-100/80 via-blue-200/60 to-blue-300/40 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-blue-700/20 backdrop-blur-xl shadow-2xl dark:shadow-black/50">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/40 via-blue-400/30 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 via-transparent to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

        <CardHeader className="relative p-6 z-10">
          <CardTitle className="text-lg font-semibold text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-blue-600 dark:text-blue-200 mt-2 group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Card>
    </motion.div>
  )
}
