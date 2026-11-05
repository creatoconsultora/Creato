"use client"

import { useRef } from "react"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TEAM_COPY } from "@/lib/content"
import { MOTION } from "@/lib/animation"

export function OneTeam() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("[data-team-reveal]", {
      y: 40,
      opacity: 0,
      stagger: MOTION.stagger,
      ease: MOTION.ease.out,
      scrollTrigger: { trigger: sectionRef.current, start: "top 68%" },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      aria-labelledby="equipo-title"
      id="equipo"
      className="on-dark relative overflow-hidden bg-graphite px-6 py-20 text-white md:px-10 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(233,109,69,.16),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,.05),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14">
          <div data-team-reveal>
            <h2
              id="equipo-title"
              className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white"
            >
              {TEAM_COPY.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-white/75">
              {TEAM_COPY.description}
            </p>
            <ul className="mt-6 space-y-3 border-l-2 border-orange pl-5 text-sm sm:text-base text-white/90">
              {TEAM_COPY.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-orange shrink-0" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-team-reveal className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-graphite">
            <ImageWithSkeleton
              src="/images/equipo.png"
              alt="Equipo de Creato en reunión de coordinación de proyectos"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              skeletonClassName="bg-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/80">
              <span className="font-heading font-semibold text-white">creato<span className="text-orange">.</span></span>
              <span>Coordinación y seguimiento con un responsable único</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
