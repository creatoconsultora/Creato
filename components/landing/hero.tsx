"use client"

import { useRef, useState, useEffect } from "react"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react"
import { WHATSAPP_URL, SCHEDULE_URL } from "@/lib/content"
import { HelpPanel } from "./help-panel"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const card3dRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false })

  // GSAP Entrance Stagger
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

    tl.from("[data-hero-badge]", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
    })
      .from(
        "[data-hero-display]",
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
        },
        "-=0.4"
      )
      .from(
        "[data-hero-sub]",
        {
          y: 24,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        "[data-hero-metrics]",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
        },
        "-=0.4"
      )
      .from(
        "[data-hero-artifact]",
        {
          scale: 0.92,
          opacity: 0,
          rotateY: -15,
          duration: 0.9,
        },
        "-=0.7"
      )
  }, { scope: containerRef })

  // 3D Physical UI Parallax Tilt
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = card3dRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within element
    const y = e.clientY - rect.top // y position within element

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Normalize between -1 and 1
    const normX = (x - centerX) / centerX
    const normY = (y - centerY) / centerY

    // Max rotation 16deg for physical realism
    const rotX = -normY * 16
    const rotY = normX * 16

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1200,
    })

    setMousePos({ x, y, active: true })
  }

  const handlePointerLeave = () => {
    const card = card3dRef.current
    if (!card) return

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.45)",
    })

    setMousePos((prev) => ({ ...prev, active: false }))
  }

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-dvh overflow-hidden bg-[#0e0f11] text-white pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center"
    >
      {/* Background Architectural Canvas (Graded, textured, NO generic blurred orbs) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ImageWithSkeleton
          src="/images/hero.png"
          alt="Creato proyectos"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover opacity-30"
          skeletonClassName="bg-white/5"
        />
        <div className="tactile-blueprint absolute inset-0 opacity-80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0e0f11] via-transparent to-[#0e0f11] opacity-90"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 70/30 Editorial Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column (Editorial Headline, Claims & Tangible Metrics) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start">
            
            {/* Top Badges & Real Status */}
            <div data-hero-badge className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-1 font-mono text-[11px] font-bold tracking-widest text-white uppercase border border-white/10">
                <ShieldCheck className="size-3.5 text-orange" />
                ESTUDIO MULTIDISCIPLINARIO
              </span>

              {/* Rotated Physical Sticker */}
              <span className="inline-block rotate-[-3deg] rounded bg-orange px-2.5 py-0.5 font-mono text-[10px] font-black tracking-wider text-white uppercase shadow-md shadow-orange/30">
                RESPUESTA EN EL DÍA
              </span>
            </div>

            {/* Impact Display Headline */}
            <div className="overflow-hidden mb-2">
              <p
                data-hero-display
                className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.25em] text-orange uppercase mb-2"
              >
                UN SOLO CONTRATO · CINCO DISCIPLINAS
              </p>
            </div>

            <div className="overflow-hidden">
              <h1
                data-hero-display
                className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[0.92] text-balance"
              >
                ARQUITECTURA, TECNOLOGÍA & GESTIÓN.
              </h1>
            </div>

            <div className="overflow-hidden mt-2">
              <span
                data-hero-display
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white/40 leading-none"
              >
                SIN INTERMEDIARIOS.
              </span>
            </div>

            {/* Direct, sharp copywriting with zero corporate fluff */}
            <p
              data-hero-sub
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80 font-normal"
            >
              Transformamos locales comerciales, desarrollamos software a medida y ordenamos las
              operaciones de tu empresa con un único director de proyecto responsable de punta a punta.
            </p>

            {/* Primary Action Buttons with Physical Click Feedback */}
            <div data-hero-sub className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-heading text-sm font-bold tracking-wider text-white uppercase shadow-xl shadow-orange/25 transition-transform duration-160 ease-out hover:bg-[#ff7a45] active:scale-95"
              >
                <span>Presupuestar Proyecto</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <HelpPanel />

              <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-heading text-xs sm:text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-white/10 hover:border-white/40 active:scale-95"
              >
                <span>Agendar Llamada</span>
              </a>
            </div>

            {/* Tangible Metrics / Hard Data Satellites */}
            <div
              data-hero-metrics
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/12 pt-6 w-full"
            >
              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                  24h
                </span>
                <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase mt-0.5">
                  Tiempo de respuesta
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-black text-orange tracking-tight">
                  100%
                </span>
                <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase mt-0.5">
                  Centralizado (1 Interlocutor)
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                  05
                </span>
                <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase mt-0.5">
                  Áreas integradas
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                  30+
                </span>
                <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase mt-0.5">
                  Obras y proyectos
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Physical UI Monolith (30% dominant interactive artifact) */}
          <div
            data-hero-artifact
            className="lg:col-span-5 xl:col-span-4 flex justify-center perspective-1200 py-6"
          >
            <div
              ref={card3dRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative w-full max-w-[380px] rounded-2xl border border-white/20 bg-[#16181d] p-6 shadow-2xl shadow-black/80 preserve-3d cursor-crosshair transition-shadow duration-300 hover:shadow-orange/10 hover:border-white/35 select-none"
              style={{
                boxShadow: mousePos.active
                  ? "0 35px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(233, 109, 69, 0.15)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Dynamic Specular Glare reacting to cursor */}
              {mousePos.active && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 280px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.25), transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Technical Physical Header (Corner Screws & Spec Stamp) */}
              <div
                className="flex items-center justify-between border-b border-white/10 pb-4 preserve-3d"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-orange animate-pulse" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-white/70 uppercase">
                    SPEC // CR-2026-X
                  </span>
                </div>
                <span className="rotate-[4deg] rounded border border-white/20 bg-white/5 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-orange uppercase">
                  LLAVE EN MANO
                </span>
              </div>

              {/* Central Physical Compass Plate */}
              <div
                className="my-7 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0e0f11]/90 p-6 preserve-3d"
                style={{ transform: "translateZ(55px)" }}
              >
                <div className="relative size-28 sm:size-32">
                  <img
                    src="/creato-compass.svg"
                    alt="Brújula técnica Creato"
                    className="size-full object-contain filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.6)]"
                  />
                  {/* Subtle pulsing beacon at center */}
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <span className="size-3 rounded-full bg-orange/40 animate-ping" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="font-heading text-sm font-bold tracking-tight text-white uppercase">
                    INTERLOCUTOR TÉCNICO DIRECTO
                  </p>
                  <p className="font-mono text-[11px] text-white/60 mt-0.5">
                    Coordinación integral de obras y sistemas
                  </p>
                </div>
              </div>

              {/* Physical Dossier Bottom Metrics */}
              <div
                className="space-y-2 border-t border-white/10 pt-4 font-mono text-[11px] preserve-3d"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/50">SEDE CENTRAL:</span>
                  <span className="font-semibold text-white">CÓRDOBA · ROSARIO · BSAS</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/50">MODALIDAD:</span>
                  <span className="font-semibold text-emerald-400">PRESENCIAL + REMOTO</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/50">CONTRATACIÓN:</span>
                  <span className="font-semibold text-orange">PRESUPUESTO UNIFICADO</span>
                </div>
              </div>

              {/* Interactive micro-cue */}
              <div
                className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[9px] tracking-widest text-white/40 uppercase preserve-3d"
                style={{ transform: "translateZ(20px)" }}
              >
                <span>[ TILT INTERACTIVO // MOVER CURSOR ]</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
