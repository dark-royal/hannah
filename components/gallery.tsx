"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  // Use the uploaded video path:
  const photos = [
    { id: 1, src: "/hannah-guy.mp4" }, 
    // Replace this with your actual video file path if different
  ]

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
              <div
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                {photos[selectedIndex].src.endsWith(".mp4") ? (
                  <video
                    src={photos[selectedIndex].src}
                    autoPlay
                    loop
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

                {/* Overlay text to indicate click */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity rounded-2xl">
                  <p className="text-white font-semibold text-lg select-none pointer-events-none">
                    Click to view full video
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          style={{ overflow: "hidden" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full z-50"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>

          {photos[selectedIndex].src.endsWith(".mp4") ? (
            <video
              src={photos[selectedIndex].src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            />
          ) : (
            <Image
              src={photos[selectedIndex].src}
              alt="Fullscreen Media"
              width={1200}
              height={1200}
              className="rounded-xl max-h-[90vh] object-contain"
            />
          )}
        </div>
      )}
    </section>
  )
}
