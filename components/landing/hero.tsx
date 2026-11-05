"use client"

import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { HERO } from "@/lib/content"
import { MOTION } from "@/lib/animation"
import { HelpPanel } from "./help-panel"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.from("[data-hero-reveal]", {
      yPercent: 115,
      opacity: 0,
      duration: MOTION.duration.reveal,
      ease: MOTION.ease.out,
      stagger: MOTION.stagger,
      delay: 0.15,
    })
  }, { scope: heroRef })

  return (
    <header ref={heroRef} className="hero-shell on-dark relative isolate flex min-h-dvh h-auto md:h-dvh flex-col justify-between overflow-hidden bg-navy text-white">
      <ImageWithSkeleton
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
        skeletonClassName="bg-white/5"
      />
      <div className="hero-noise absolute inset-0" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      {/* Hero Content Container - Proportioned to never cut off */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-8 pt-28 sm:px-10 sm:pb-12 md:pb-14 md:pt-32">
        <div className="overflow-hidden">
          <p data-hero-reveal className="font-heading text-[clamp(2.75rem,6.5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.08em] text-white">
            Creato<span className="text-orange">.</span>
          </p>
        </div>

        <h1 className="mt-3 sm:mt-4 max-w-4xl overflow-hidden text-[clamp(1.75rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white">
          <span data-hero-reveal className="inline-block text-balance">{HERO.title}</span>
        </h1>

        <div data-hero-reveal className="mt-4 sm:mt-5 grid max-w-4xl gap-4 sm:gap-6 border-t border-white/15 pt-4 sm:pt-5 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80">
            {HERO.description}
          </p>
          <div className="shrink-0">
            <HelpPanel />
          </div>
        </div>
      </div>
    </header>
  )
}
