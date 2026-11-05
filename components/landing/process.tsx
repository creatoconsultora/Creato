"use client"

import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState, useEffect } from "react"
import { STEPS } from "@/lib/content"
import { MOTION } from "@/lib/animation"
import { cn } from "@/lib/utils"

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeMobileStep, setActiveMobileStep] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useGSAP(() => {
    if (window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("[data-process-step]", {
      y: 34,
      opacity: 0,
      stagger: MOTION.stagger * 2,
      ease: MOTION.ease.out,
      clearProps: "all",
      scrollTrigger: { trigger: sectionRef.current, start: "top 68%", once: true },
    })
  }, { scope: sectionRef })

  // Detección de dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // En móvil ÚNICAMENTE: los números brillan al acercarse al centro del viewport
  useEffect(() => {
    if (!isMobile) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = sectionRef.current
          if (!section) {
            ticking = false
            return
          }

          const sectionRect = section.getBoundingClientRect()
          // Si la sección no está en pantalla, no calculamos
          if (sectionRect.bottom < 80 || sectionRect.top > window.innerHeight - 80) {
            ticking = false
            return
          }

          const viewportCenter = window.innerHeight / 2
          let closestIdx = 0
          let minDistance = Infinity

          stepRefs.current.forEach((el, idx) => {
            if (!el) return
            const rect = el.getBoundingClientRect()
            const elCenter = rect.top + rect.height / 2
            const distance = Math.abs(viewportCenter - elCenter)

            if (distance < minDistance) {
              minDistance = distance
              closestIdx = idx
            }
          })

          setActiveMobileStep(closestIdx)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} aria-labelledby="proceso-title" id="proceso" className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28">
      {/* Fondo de grilla que se difumina */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,black_35%,transparent_85%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="grid gap-5 border-b border-navy/15 pb-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <h2 id="proceso-title" className="mt-3 text-4xl leading-none text-navy md:text-6xl">
              Metodología de trabajo
            </h2>
          </div>
        </header>

        <div className="relative mt-12">
          {/* Barra conectora siempre naranja (desconectada del scroll) */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-orange lg:block shadow-[0_0_8px_rgba(233,109,69,0.3)]" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, index) => {
              const isMobileActive = isMobile && activeMobileStep === index

              return (
                <li
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  data-process-step
                  key={step.title}
                  onClick={() => {
                    if (isMobile) setActiveMobileStep(index)
                  }}
                  className={cn(
                    "group relative pl-5 sm:pl-6 transition-all duration-300 lg:border-l-0 lg:pl-0 lg:cursor-default",
                    isMobileActive
                      ? "border-l-2 border-orange"
                      : "border-l border-navy/15",
                    isMobile && "cursor-pointer"
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 mb-8 flex size-10 items-center justify-center rounded-full font-heading text-xs font-semibold transition-all duration-300 lg:mb-12",
                      // Estilos para PC (100% idénticos al original con hover de mouse)
                      "lg:border lg:border-navy/20 lg:bg-white lg:text-navy lg:shadow-none lg:scale-100 lg:group-hover:border-orange lg:group-hover:bg-orange lg:group-hover:text-white",
                      // Estilos exclusivos para móvil (brillo al centro del viewport)
                      isMobileActive
                        ? "border-orange bg-orange text-white shadow-[0_0_20px_rgba(233,109,69,0.65)] scale-110"
                        : "border border-navy/20 bg-white text-navy"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={cn(
                      "font-heading text-5xl leading-none tracking-[-.08em] transition-all duration-300",
                      // Estilos para PC (hover clásico)
                      "lg:text-orange/25 lg:scale-100 lg:drop-shadow-none lg:group-hover:text-orange/70",
                      // Estilos exclusivos para móvil
                      isMobileActive
                        ? "text-orange scale-105 drop-shadow-[0_0_14px_rgba(233,109,69,0.45)]"
                        : "text-orange/25"
                    )}
                  >
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl leading-tight text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-navy/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-xl text-navy">¿Iniciamos con el primer paso?</p>
            <p className="mt-1 text-sm text-muted-foreground">Relevamos tus requerimientos y presentamos una propuesta económica unificada.</p>
          </div>
          <a
            href="#contacto"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange"
          >
            <span>Solicitar presupuesto</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
