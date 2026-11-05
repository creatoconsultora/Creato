"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PILLARS, type Pillar } from "@/lib/content"
import { MOTION } from "@/lib/animation"
import { cn } from "@/lib/utils"
import { PillarCard, PillarModal } from "./pillar-card"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"

export function Pillars() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const [mobileModalPillar, setMobileModalPillar] = useState<Pillar | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartRef = useRef<number | null>(null)
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([])
  const chipsScrollRef = useRef<HTMLDivElement>(null)

  const activePillar = PILLARS[activeMobileIndex]

  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("[data-pillar-reveal]", {
      y: 44,
      opacity: 0,
      stagger: MOTION.stagger,
      ease: MOTION.ease.out,
      scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
    })
  }, { scope: sectionRef })

  const pauseAutoPlayTemporarily = () => {
    setIsPaused(true)
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 7000)
  }

  // Observe if the section is visible in the viewport before auto-advancing
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Auto-advance every 4.5s on mobile ONLY when section is visible and user is not interacting
  useEffect(() => {
    if (isPaused || mobileModalPillar || !isInView) return
    const timer = setInterval(() => {
      setActiveMobileIndex((prev) => (prev + 1) % PILLARS.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, mobileModalPillar, isInView])

  // Scroll ONLY the chips container horizontally
  useEffect(() => {
    const container = chipsScrollRef.current
    const chip = chipRefs.current[activeMobileIndex]
    if (container && chip) {
      const scrollTarget = chip.offsetLeft - (container.clientWidth - chip.clientWidth) / 2
      container.scrollTo({
        left: Math.max(0, scrollTarget),
        behavior: "smooth",
      })
    }
  }, [activeMobileIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    pauseAutoPlayTemporarily()
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return
    const diff = touchStartRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveMobileIndex((prev) => (prev + 1) % PILLARS.length)
      } else {
        setActiveMobileIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length)
      }
    }
    touchStartRef.current = null
  }

  return (
    <section ref={sectionRef} aria-labelledby="pilares-title" id="pilares" className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        <header className="shrink-0">
          <h2 id="pilares-title" className="mt-3 max-w-3xl text-4xl leading-none text-navy md:text-6xl">
            Áreas de trabajo
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-orange short:text-sm">
            Coordinación de proyectos en cinco disciplinas comerciales.
          </p>
        </header>

        {/* DESKTOP ACCORDION (lg and up) */}
        <ul className="mt-8 hidden h-[34rem] shrink-0 gap-3 overflow-hidden lg:flex lg:flex-row">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.id}
              data-pillar-reveal
              className="pillar-item h-full min-h-0 min-w-0 flex-1 transition-[flex] duration-500 ease-out"
            >
              <PillarCard pillar={pillar} className="h-full min-h-0" />
            </li>
          ))}
        </ul>

        {/* MOBILE & TABLET ADAPTIVE INTERFACE (< lg) */}
        <div className="mt-6 flex flex-col gap-4 lg:hidden">
          {/* Horizontal Chips Navigation with visual scroll cue */}
          <div className="relative">
            <div
              ref={chipsScrollRef}
              className="flex gap-2 overflow-x-auto pb-1 pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PILLARS.map((pillar, idx) => {
                const active = idx === activeMobileIndex
                const shortName =
                  pillar.id === "arquitectura"
                    ? "Arquitectura"
                    : pillar.id === "eventos"
                    ? "Eventos"
                    : pillar.id === "identidad"
                    ? "Identidad"
                    : pillar.id === "tecnologia"
                    ? "Tecnología"
                    : "Gestión"

                return (
                  <button
                    key={pillar.id}
                    ref={(el) => {
                      chipRefs.current[idx] = el
                    }}
                    type="button"
                    onClick={() => {
                      pauseAutoPlayTemporarily()
                      setActiveMobileIndex(idx)
                    }}
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 active:scale-95",
                      active
                        ? "bg-orange text-white shadow-md shadow-orange/25"
                        : "border border-navy/15 bg-navy/5 text-navy/75 hover:bg-navy/10"
                    )}
                  >
                    <span className={cn("font-mono text-[10px]", active ? "text-white/80" : "text-orange")}>
                      {pillar.number}
                    </span>
                    <span>{shortName}</span>
                  </button>
                )
              })}
            </div>

            <div className="pointer-events-none absolute right-0 top-0 bottom-1 flex items-center justify-end w-12 bg-gradient-to-l from-white via-white/80 to-transparent pr-1">
              <ChevronRight className="size-4 text-orange" />
            </div>
          </div>

          {/* Active Area Touch Card */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => {
              pauseAutoPlayTemporarily()
              setMobileModalPillar(activePillar)
            }}
            className="group relative flex min-h-[420px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-xl transition-all"
          >
            <ImageWithSkeleton
              key={activePillar.image}
              src={activePillar.image}
              alt={activePillar.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              skeletonClassName="bg-white/10"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative flex flex-col justify-end">
              <div className="mb-auto flex items-center justify-between pb-6">
                <span className="rounded-full bg-white/20 px-2.5 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                  {activePillar.number} / 05
                </span>
                <span className="text-[11px] font-medium text-white/70">
                  Tocá para ver detalle
                </span>
              </div>

              <h3 className="font-heading text-2xl font-semibold leading-tight text-white">
                {activePillar.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {activePillar.headline}
              </p>

              <ul className="mt-3 flex flex-col gap-1.5 border-t border-white/15 pt-3">
                {activePillar.services.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-xs text-white/85">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden="true"
                    />
                    <span className="line-clamp-2">{service}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  pauseAutoPlayTemporarily()
                  setMobileModalPillar(activePillar)
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange/90 active:scale-[0.98]"
              >
                <span>Ver detalle</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Navigation Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {PILLARS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  pauseAutoPlayTemporarily()
                  setActiveMobileIndex(idx)
                }}
                aria-label={`Ver detalle de ${p.name}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeMobileIndex ? "w-6 bg-orange" : "w-1.5 bg-navy/20"
                )}
              />
            ))}
          </div>
        </div>

        {/* Modal Dialog for Mobile */}
        {mobileModalPillar && (
          <PillarModal
            pillar={mobileModalPillar}
            open={!!mobileModalPillar}
            onClose={() => setMobileModalPillar(null)}
          />
        )}
      </div>
    </section>
  )
}
