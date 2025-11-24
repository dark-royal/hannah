"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate floating hearts
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 3 + Math.random() * 2,
      }))
      setHearts(newHearts)
    }

    generateHearts()

    // Regenerate hearts periodically
    const interval = setInterval(generateHearts, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-3xl opacity-70"
          style={
            {
              left: `${heart.left}%`,
              bottom: "-20px",
              "--duration": `${heart.duration}s`,
              "--x": `${(Math.random() - 0.5) * 100}px`,
              animationDelay: `${heart.delay}s`,
            } as React.CSSProperties & { "--duration": string; "--x": string }
          }
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
