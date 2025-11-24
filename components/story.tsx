"use client"

export default function Story() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">Our Journey Together</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-12" />

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p className="text-balance">
            Remember that time we first met on TikTok? I never imagined we'd become this close, let alone think about a
            relationship! We exchanged contacts, and then we started chatting on WhatsApp. I wasn't sure what you wanted
            at first, thinking, "Oh, it's just a TikTok connection," but boy, was I wrong!
          </p>

          <p className="text-balance">
            The more we talked, the more I realized how different you are from everyone else. You might not have
            everything you've desired yet, but you've got so much potential and you are truly blessed. Abiodun, you're
            one of a kind, a man of your word, and I'm so incredibly lucky. I know this is just the beginning, but if
            Allah wills it, I'd love nothing more than to spend the rest of my life with you.
          </p>

          <p className="text-balance">
            We've been through so much—well, maybe we haven't scaled through a lot yet 😂—so many ups and downs, but
            we've always come out on top. The little time we've spent together feels like a lifetime. You're my brother,
            my father figure, my best friend, you're all types of ship I need in my life. YOU ARE THE PERFECT
            COMBINATION OF QUALITIES I'VE BEEN LOOKING FOR!
          </p>

          <p className="text-balance">
            May Allah accept all your prayers and bless you abundantly. Thank you for being so supportive and for being
            such a strong man. I promise to be here for you always, to be your shoulder to cry on, your partner in
            crime, and your biggest fan.
          </p>

          <p className="text-center text-2xl font-light text-accent pt-6">
            I love you more than words can say. May Allah always guide and protect us. Ameen. 💕
          </p>
        </div>

        {/* Timeline dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-accent"
              style={{
                animation: `pulse-scale 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
