"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`relative text-center space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        {/* Heart Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative animate-pulse-scale">
            <Heart size={80} className="text-primary fill-primary drop-shadow-lg" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-sm">Happy Birthday</h1>
          <p className="text-2xl md:text-3xl text-foreground/80 font-light">To the most amazing person in my life</p>
        </div>

        {/* Subtitle Message */}
        <div className="pt-4">
          <p className="text-lg md:text-xl text-accent inline-block px-6 py-3 rounded-full border-2 border-accent/50 backdrop-blur-sm">
            ✨ You make every day special ✨
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
