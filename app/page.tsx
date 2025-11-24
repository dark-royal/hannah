"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Gallery from "@/components/gallery"
import Story from "@/components/story"
import Wishes from "@/components/wishes"
import FloatingHearts from "@/components/floating-hearts"
import Confetti from "@/components/confetti"
import ReasonCards from "@/components/reason-cards"
import Timeline from "@/components/timeline"
import Surprise from "@/components/surprise"
import MessagePopup from "@/components/message-popup"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    const messageTimer = setTimeout(() => setShowMessage(true), 3000)
    return () => {
      clearTimeout(timer)
      clearTimeout(messageTimer)
    }
  }, [])

  return (
    <main className="overflow-hidden">
      <FloatingHearts />
      {showConfetti && <Confetti />}
      {showMessage && <MessagePopup onClose={() => setShowMessage(false)} />}
      <Header />
      <ReasonCards />
      <Timeline />
      <Wishes />
      <Story />
      <Gallery />
      <Surprise />
      <footer className="bg-gradient-to-t from-primary/10 to-transparent py-12 text-center">
        <p className="text-sm text-muted-foreground">Made with all my love for you, Abiodun</p>
      </footer>
    </main>
  )
}
