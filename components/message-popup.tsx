"use client"

import { X, Heart } from "lucide-react"

interface MessagePopupProps {
  onClose: () => void
}

export default function MessagePopup({ onClose }: MessagePopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md p-8 text-center animate-bounce-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        <div className="flex justify-center mb-4">
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-scale" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Happy Birthday!</h3>
        <p className="text-foreground/80 mb-6">This day is all about celebrating the incredible person you are</p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
        >
          Let's Celebrate
        </button>
      </div>
    </div>
  )
}
