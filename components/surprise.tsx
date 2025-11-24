"use client"

import { useState } from "react"
import { Gift, Heart, Sparkles } from "lucide-react"

export default function Surprise() {
  const [revealed, setRevealed] = useState(false)
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
    if (clicks >= 2) {
      setRevealed(true)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">One More Thing...</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-12" />

        <div className="h-80 relative">
          <button onClick={handleClick} className="w-full h-full relative group focus:outline-none">
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-4 border-dashed border-primary/50 flex items-center justify-center transition-all duration-300 ${
                revealed
                  ? "scale-95 opacity-0 pointer-events-none"
                  : "scale-100 opacity-100 hover:scale-105 hover:border-primary"
              }`}
            >
              <div className="text-center">
                <Gift className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce group-hover:text-accent" />
                <p className="text-2xl font-bold text-primary mb-2">Tap to Surprise!</p>
                <p className="text-foreground/70 text-sm">({clicks + 1}/3 taps)</p>
              </div>
            </div>
          </button>

          {revealed && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center p-8 text-white animate-bounce-in shadow-2xl z-10">
              <div className="text-center space-y-6">
                <Sparkles className="w-16 h-16 mx-auto animate-spin" />
                <div>
                  <p className="text-lg mb-4">Here's my promise to you, Abiodun:</p>
                  <p className="text-2xl font-bold leading-relaxed">
                    I will love you fiercely, support your dreams, and build an amazing life with you. You deserve the
                    world, and I'm here to give you that and more.
                  </p>
                </div>
                <Heart className="w-12 h-12 mx-auto fill-white animate-pulse-scale" />
              </div>
            </div>
          )}
        </div>

        <p className="mt-8 text-foreground/60 text-sm">
          {!revealed && "Click the gift box 3 times to reveal your surprise"}
        </p>
      </div>
    </section>
  )
}
