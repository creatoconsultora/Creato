"use client"

import { useState, useRef } from "react"
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Sparkles } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PILLARS, WHATSAPP_URL, type Pillar } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import { PillarModal } from "./pillar-card"

export function Pillars() {
  const [activePillarIndex, setActivePillarIndex] = useState(0)
  const [selectedModalPillar, setSelectedModalPillar] = useState<Pillar | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const activePillar = PILLARS[activePillarIndex]

  // Entrance animation with GSAP
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.registerPlugin(ScrollTrigger)

    gsap.from("[data-pillar-editorial]", {
      y: 35,
      opacity: 0,
      stagger: 0.08,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="pilares"
      aria-labelledby="pilares-title"
      className="relative overflow-hidden bg-[#faf9f6] px-4 py-20 sm:px-6 md:py-28 lg:px-8 border-b border-[#dfddd7]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Editorial & Assertive */}
        <div data-pillar-editorial className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold tracking-widest text-orange uppercase">
                // 01 DOSSIER DE SERVICIOS
              </span>
              <span className="rotate-[-2deg] rounded bg-black/5 px-2 py-0.5 font-mono text-[10px] font-bold text-black/70 uppercase">
                COBERTURA TOTAL
              </span>
            </div>
            <h2
              id="pilares-title"
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0e0f11] uppercase leading-[0.95] text-balance"
            >
              CINCO DISCIPLINAS. UN SOLO INTERLOCUTOR.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#5a5c62] font-normal">
            Eliminamos la fricción de coordinar cinco proveedores diferentes. Desde la dirección de obra de un nuevo punto de venta hasta la arquitectura del software comercial.
          </p>
        </div>

        {/* 70/30 Editorial Interactive Dossier Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column (70%): Interactive Editorial Dossier List */}
          <div data-pillar-editorial className="lg:col-span-7 xl:col-span-8 flex flex-col">
            {PILLARS.map((pillar, index) => {
              const isActive = index === activePillarIndex
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(index)}
                  onMouseEnter={() => setActivePillarIndex(index)}
                  className={cn(
                    "group relative cursor-pointer border-b border-black/10 transition-colors duration-200 py-6 sm:py-7 select-none",
                    isActive ? "bg-black/[0.02]" : "hover:bg-black/[0.01]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Number and Title */}
                    <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                      <span
                        className={cn(
                          "font-mono text-xl sm:text-2xl font-black transition-colors duration-200 shrink-0",
                          isActive ? "text-orange" : "text-black/30 group-hover:text-black/60"
                        )}
                      >
                        {pillar.number}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={cn(
                            "font-heading text-2xl sm:text-3xl font-black tracking-tight uppercase leading-tight transition-colors duration-200",
                            isActive ? "text-[#0e0f11]" : "text-black/50 group-hover:text-black/80"
                          )}
                        >
                          {pillar.name}
                        </h3>

                        {/* Collapsible details visible when active or on mobile */}
                        <div
                          className={cn(
                            "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
                            isActive
                              ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                              : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="text-sm sm:text-base font-medium leading-relaxed text-[#0e0f11]/90 max-w-xl">
                              {pillar.headline}
                            </p>

                            {/* Tangible deliverables tags */}
                            <div className="mt-3 flex flex-wrap gap-2">
                              {pillar.services.map((service) => (
                                <span
                                  key={service}
                                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-black/80 shadow-xs"
                                >
                                  <span className="size-1 rounded-full bg-orange" />
                                  {service}
                                </span>
                              ))}
                            </div>

                            {/* Direct modal trigger */}
                            <div className="mt-4 flex items-center gap-3">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedModalPillar(pillar)
                                }}
                                className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-orange uppercase tracking-wider hover:underline active:scale-95"
                              >
                                <span>Ver alcance técnico completo</span>
                                <ChevronRight className="size-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow / Active Indicator */}
                    <div className="shrink-0 pt-1">
                      <span
                        className={cn(
                          "grid size-8 place-items-center rounded-full border transition-all duration-200",
                          isActive
                            ? "border-orange bg-orange text-white rotate-45"
                            : "border-black/15 text-black/40 group-hover:border-black/30 group-hover:text-black/70"
                        )}
                      >
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column (30%): Dynamic Photographic Anchor & Dossier Preview */}
          <div data-pillar-editorial className="lg:col-span-5 xl:col-span-4 sticky top-28">
            <div className="relative overflow-hidden rounded-2xl border border-black/15 bg-[#0e0f11] text-white shadow-xl">
              
              {/* Media Preview Box */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#16181d]">
                <ImageWithSkeleton
                  key={activePillar.image}
                  src={activePillar.image}
                  alt={activePillar.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  skeletonClassName="bg-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f11] via-transparent to-transparent opacity-80" />

                {/* Physical Rotated Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rotate-[-4deg] inline-block rounded bg-orange px-2.5 py-1 font-mono text-[10px] font-black uppercase text-white shadow-md">
                    ENTREGA LLAVE EN MANO
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="font-mono text-xs font-bold tracking-widest text-orange uppercase">
                    ÁREA {activePillar.number} // 05
                  </span>
                  <p className="font-heading text-lg font-bold text-white leading-tight mt-0.5">
                    {activePillar.name}
                  </p>
                </div>
              </div>

              {/* Dossier Specifications Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs leading-relaxed text-white/75 line-clamp-3">
                  {activePillar.description}
                </p>

                {/* Hard Truth / Commercial Assurance */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-white/90">
                    <CheckCircle2 className="size-3.5 text-orange shrink-0" />
                    <span>Presupuesto global cerrado</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-white/90">
                    <CheckCircle2 className="size-3.5 text-orange shrink-0" />
                    <span>Director de proyecto asignado</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-white/90">
                    <CheckCircle2 className="size-3.5 text-orange shrink-0" />
                    <span>Cronograma y plazos garantizados</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedModalPillar(activePillar)}
                    className="flex-1 rounded-xl bg-orange py-2.5 px-4 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform duration-160 hover:bg-[#ff7a45] active:scale-95"
                  >
                    Detalle Técnico
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 py-2.5 px-4 font-heading text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10 active:scale-95"
                  >
                    Consultar
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full Technical Modal Dialog */}
      {selectedModalPillar && (
        <PillarModal
          pillar={selectedModalPillar}
          open={!!selectedModalPillar}
          onClose={() => setSelectedModalPillar(null)}
        />
      )}
    </section>
  )
}
