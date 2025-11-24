"use client"

import { Heart, MessageCircle, Star } from "lucide-react"

export default function Timeline() {
  const events = [
    {
      date: "First Day",
      title: "We Met on TikTok",
      description: "A chance connection that changed everything",
      icon: Star,
    },
    {
      date: "Soon After",
      title: "WhatsApp Magic",
      description: "Messages that turned into something real",
      icon: MessageCircle,
    },
    {
      date: "Every Day",
      title: "Growing Together",
      description: "Ups and downs, but always us against the world",
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">Our Journey</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-16" />

        <div className="space-y-12">
          {events.map((event, index) => {
            const IconComponent = event.icon
            return (
              <div
                key={index}
                className="flex gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  {index !== events.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <p className="text-accent font-semibold text-sm">{event.date}</p>
                  <h3 className="text-2xl font-bold text-primary mt-2">{event.title}</h3>
                  <p className="text-foreground/70 mt-2">{event.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
