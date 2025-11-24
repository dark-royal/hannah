"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

export default function ReasonCards() {
  const [flipped, setFlipped] = useState<number | null>(null)

  const reasons = [
    "Your smile makes my heart skip a beat",
    "You're my safe place and my home",
    "Your potential is absolutely limitless",
    "You're a man of integrity and honor",
    "You make me feel truly loved",
    "You're my best friend and soulmate",
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why I Love You</h2>
          <p className="text-foreground/70">Click each card to reveal reasons</p>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="h-64 perspective cursor-pointer"
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d" as any,
                  transform: flipped === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-primary/30 hover:border-primary/60 transition-all shadow-lg hover:shadow-xl group"
                  style={{ backfaceVisibility: "hidden" as any }}
                >
                  <Heart className="w-12 h-12 text-primary mb-4 group-hover:animate-pulse" />
                  <p className="text-center font-semibold text-foreground text-sm">Click me to reveal</p>
                  <Sparkles className="w-6 h-6 text-accent mt-2 animate-bounce" />
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl p-6 flex items-center justify-center border-2 border-primary shadow-lg"
                  style={{ backfaceVisibility: "hidden" as any, transform: "rotateY(180deg)" }}
                >
                  <p className="text-center font-bold text-white text-lg leading-relaxed">{reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
