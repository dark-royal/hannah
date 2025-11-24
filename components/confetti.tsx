"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function Confetti() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2.5 + Math.random() * 1.5,
    }))
    setConfetti(pieces)
  }, [])

  const confettiPieces = ["🎉", "🎊", "⭐", "🎈", "💝", "🌟"]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-float-up text-2xl"
          style={
            {
              left: `${piece.left}%`,
              bottom: "-20px",
              "--duration": `${piece.duration}s`,
              "--x": `${(Math.random() - 0.5) * 150}px`,
              animationDelay: `${piece.delay}s`,
            } as React.CSSProperties & { "--duration": string; "--x": string }
          }
        >
          {confettiPieces[Math.floor(Math.random() * confettiPieces.length)]}
        </div>
      ))}
    </div>
  )
}
