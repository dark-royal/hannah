"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Use correct public path + no spaces
  const photos = [
    { id: 1, src: "/hannah-guy.mp4" },
  ]

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          Our Beautiful Moments
        </h2>

        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-16" />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="relative h-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">

                {/* FIXED: Video / Image switch */}
                {photos[selectedIndex].src.endsWith(".mp4") ? (
                  <video
                    src={photos[selectedIndex].src}
                    autoPlay
                    loop
                    controls
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={photos[selectedIndex].src}
                    alt="Gallery Image"
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Navigation */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedIndex + 1} / {photos.length}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
