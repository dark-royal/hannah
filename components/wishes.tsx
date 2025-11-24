"use client"

import { Sparkles } from "lucide-react"

const wishes = [
  "💕 Here's to another year of beautiful moments",
  "🎉 May your day be filled with love and laughter",
  "✨ You deserve all the happiness in the world",
  "🌟 Thank you for being you every single day",
]

export default function Wishes() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Birthday Wishes</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/80 to-secondary/50 border border-primary/20 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Sparkles className="text-accent mb-3 group-hover:animate-spin" size={24} />
              <p className="text-lg text-foreground/90 font-light">{wish}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
