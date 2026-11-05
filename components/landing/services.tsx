"use client"

import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  IceCreamCone,
  MessageCircle,
  X,
} from "lucide-react"
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from "react"
import { CASES, PILLARS, SCHEDULE_URL, WHATSAPP_URL, type CaseStudy } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"

/* -------------------------------------------------------------------------- */
/*                                CASE COVER                                  */
/* -------------------------------------------------------------------------- */

function CaseCover({ item, className }: { item: CaseStudy; className?: string }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.images.length < 2) return
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % item.images.length),
      3200
    )
    return () => window.clearInterval(timer)
  }, [item.images.length])

  const image = item.images[active]

  if (!image) {
    const Icon =
      item.id === "heladeria"
        ? IceCreamCone
        : item.id === "farmacias-3d"
        ? Building2
        : Building2
    return (
      <div
        className={cn(
          "flex h-full min-h-0 flex-col justify-end bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:16px_16px] bg-graphite p-5",
          className
        )}
      >
        <Icon className="mb-auto size-12 text-orange/90" strokeWidth={1.2} aria-hidden="true" />
        <p className="font-heading text-lg font-semibold text-white">{item.shortTitle}</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative h-full min-h-0 shrink-0 overflow-hidden bg-graphite transition-all duration-700",
        className
      )}
    >
      <ImageWithSkeleton
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        loading="eager"
        sizes="(max-width: 768px) 85vw, 340px"
        className={cn(
          "transition-all duration-700",
          image.kind === "photo" ? "object-cover" : "object-contain bg-white/95"
        )}
        skeletonClassName="bg-white/10"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
      {image.label && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-orange px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
          {image.label}
        </span>
      )}
      {item.images.length > 1 && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white/80 backdrop-blur-sm">
          {active + 1}/{item.images.length}
        </span>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               CASE MODAL                                   */
/* -------------------------------------------------------------------------- */

export function CaseModal({
  item,
  open,
  onClose,
}: {
  item: CaseStudy | null
  open: boolean
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  useEffect(() => {
    setActiveImgIndex(0)
  }, [item?.id])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!item) return null

  const titleId = `${item.id}-case-modal-title`
  const message = encodeURIComponent(`Hola, vi el caso "${item.shortTitle}" y quiero consultar por un proyecto similar.`)
  const activeImage = item.images[activeImgIndex]

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
      className="m-auto h-[90dvh] max-h-[720px] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-2xl bg-white p-0 text-navy shadow-2xl backdrop:bg-black/70 outline-none"
    >
      <div className="flex h-full w-full flex-col md:flex-row overflow-hidden">
        {/* Left Column (Desktop) / Top Column (Mobile): Gallery */}
        <div className="relative h-60 shrink-0 overflow-hidden bg-navy md:h-full md:w-5/12 lg:w-1/2 flex flex-col justify-between">
          {activeImage ? (
            <div
              className={`relative flex-1 w-full bg-graphite overflow-hidden ${
                activeImage.kind === "photo" ? "" : "bg-white/95"
              }`}
            >
              <ImageWithSkeleton
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={activeImage.kind === "photo" ? "object-cover" : "object-contain"}
                skeletonClassName="bg-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:block hidden pointer-events-none" />
              {activeImage.label && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                  {activeImage.label}
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center bg-graphite text-white">
              <Building2 className="size-16 text-orange/90 mb-3" strokeWidth={1.2} />
              <p className="font-heading text-lg">{item.shortTitle}</p>
              <p className="text-xs text-white/60 mt-1">Proyecto en ejecución sin imágenes públicas</p>
            </div>
          )}

          {/* Gallery navigation tabs/dots if multiple images */}
          {item.images.length > 1 && (
            <div className="z-10 flex flex-wrap items-center justify-center gap-2 bg-black/65 p-3 backdrop-blur-sm">
              {item.images.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActiveImgIndex(idx)}
                  className={cn(
                    "rounded-md border px-2.5 py-1 text-xs font-medium transition",
                    idx === activeImgIndex
                      ? "border-orange bg-orange text-white"
                      : "border-white/20 bg-white/10 text-white/80 hover:bg-white/25"
                  )}
                >
                  {img.label ? img.label : `Foto ${idx + 1}`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information, Full Deliverables, Fixed Footer */}
        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-white">
          {/* Header - TITLE NEVER CUTS OFF */}
          <div className="z-10 flex shrink-0 items-start justify-between gap-4 border-b border-navy/10 bg-white px-5 py-4 md:px-8 md:py-5">
            <div className="flex-1 min-w-0 pr-2">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {item.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-navy/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-navy uppercase"
                  >
                    {PILLARS.find((p) => p.id === area)?.name.split(" ")[0]}
                  </span>
                ))}
              </div>
              <h2
                id={titleId}
                className="font-heading text-lg sm:text-xl md:text-2xl font-bold leading-snug text-navy text-balance"
              >
                {item.shortTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-navy/20 bg-mist/60 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 space-y-5 overflow-y-auto px-5 py-4 overscroll-contain md:px-8 md:py-6 [-ms-overflow-style:none] [scrollbar-width:thin]">
            <div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground">
                <strong className="text-navy font-semibold">El proyecto: </strong>
                {item.project}
              </p>
            </div>

            {/* "Lo que hicimos específicamente" - exclusively here in the modal */}
            <div className="border-t border-navy/10 pt-4">
              <p className="mb-3 text-xs font-bold tracking-wider text-navy/70 uppercase">
                Tareas realizadas:
              </p>
              <ul className="flex flex-col gap-2.5">
                {item.work.map((task) => (
                  <li key={task} className="flex items-start gap-2.5 text-xs md:text-sm text-navy/85">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="z-10 shrink-0 border-t border-navy/10 bg-mist/70 p-3.5 backdrop-blur-sm md:px-8 md:py-4">
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <a
                href={`${WHATSAPP_URL.split("?text=")[0]}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-orange px-4 py-2.5 font-heading text-xs md:text-sm font-semibold text-white shadow-md shadow-orange/20 transition hover:bg-[#ff7d36]"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                <span>Contactar por WhatsApp</span>
              </a>
              <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 bg-white px-4 py-2.5 font-heading text-xs md:text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">Agendar llamada</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

/* -------------------------------------------------------------------------- */
/*                                CAROUSEL CARD                               */
/* -------------------------------------------------------------------------- */

function CaseCard({
  item,
  onClick,
}: {
  item: CaseStudy
  onClick: () => void
}) {
  return (
    <article
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`Ver detalle de ${item.shortTitle}`}
      className="case-card group relative flex shrink-0 cursor-pointer select-none flex-col justify-start rounded-2xl border border-white/10 bg-graphite text-white outline-none transition-all duration-300 hover:border-orange/60"
    >
      <div className="case-cover pointer-events-none relative shrink-0 overflow-hidden rounded-t-2xl">
        <CaseCover item={item} />
      </div>

      <div className="pointer-events-none flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex flex-wrap gap-1">
          {item.areas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/80"
            >
              {PILLARS.find((pillar) => pillar.id === area)?.name.split(" ")[0]}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-base sm:text-lg font-semibold leading-snug text-white group-hover:text-orange transition-colors">
          {item.shortTitle}
        </h3>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70 line-clamp-3">
          {item.project}
        </p>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MOBILE CAROUSEL                              */
/* -------------------------------------------------------------------------- */

function MobileServices({ onSelect }: { onSelect: (item: CaseStudy) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 290
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(CASES.length - 1, Math.max(0, idx)))
  }

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 290
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" })
    setActiveIndex(idx)
  }

  return (
    <div className="flex flex-col gap-3 lg:hidden">
      {/* Native horizontal snap slider with peek */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto px-1 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CASES.map((item) => (
          <CaseCard key={item.id} item={item} onClick={() => onSelect(item)} />
        ))}
      </div>

      {/* Navigation cues: Dots & Slide counter */}
      <div className="flex items-center justify-between px-2 pt-1">
        <div className="flex items-center gap-1.5">
          {CASES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir al caso ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                idx === activeIndex ? "w-5 bg-orange" : "w-1.5 bg-navy/20"
              )}
            />
          ))}
        </div>
        <span className="text-[11px] font-medium text-navy/60">
          ({activeIndex + 1}/{CASES.length})
        </span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MAIN SERVICES                                */
/* -------------------------------------------------------------------------- */

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, hasDragged: false })
  const [dragging, setDragging] = useState(false)
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const isHoveredRef = useRef(false)
  const loopWidthRef = useRef(0)
  const speedRef = useRef(0.08)
  const cases = CASES

  useEffect(() => {
    isHoveredRef.current = isHovered
  }, [isHovered])

  /* Desktop Continuous Marquee Loop */
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return

    let frame = 0
    let lastTime = performance.now()
    const BASE_SPEED = 0.08

    const measure = () => {
      const track = trackRef.current
      if (track) loopWidthRef.current = track.scrollWidth / 2
    }
    const resizeObserver = new ResizeObserver(measure)
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current)
      if (trackRef.current.firstElementChild) {
        resizeObserver.observe(trackRef.current.firstElementChild)
      }
    }
    measure()

    const tick = (time: number) => {
      const track = trackRef.current
      const elapsed = Math.min(40, time - lastTime)
      lastTime = time
      const loopWidth = loopWidthRef.current

      // Pauses smoothly when user hovers over the track or is actively dragging
      if (
        track &&
        loopWidth > track.clientWidth &&
        !dragRef.current.active &&
        !isHoveredRef.current
      ) {
        const next = track.scrollLeft + speedRef.current * elapsed
        track.scrollLeft = ((next % loopWidth) + loopWidth) % loopWidth
      }

      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
    }
  }, [])

  /* Drag Controls - Only captures pointer if mouse moved > 6px, preserving clicks */
  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      hasDragged: false,
    }
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !dragRef.current.active) return
    const diff = event.clientX - dragRef.current.startX

    if (!dragRef.current.hasDragged && Math.abs(diff) > 6) {
      dragRef.current.hasDragged = true
      setDragging(true)
      try {
        track.setPointerCapture(event.pointerId)
      } catch {}
    }

    if (dragRef.current.hasDragged) {
      const loopWidth = loopWidthRef.current
      const next = dragRef.current.startScroll - diff
      track.scrollLeft = loopWidth ? ((next % loopWidth) + loopWidth) % loopWidth : next
    }
  }

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (track && track.hasPointerCapture(event.pointerId)) {
      try {
        track.releasePointerCapture(event.pointerId)
      } catch {}
    }
    dragRef.current.active = false
    setTimeout(() => {
      setDragging(false)
      dragRef.current.hasDragged = false
    }, 60)
  }

  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    // If the user scrolls horizontally with trackpad or Shift+wheel, scroll marquee smoothly
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) {
      const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY
      const track = trackRef.current
      if (track) {
        const loopWidth = loopWidthRef.current
        const next = track.scrollLeft + delta
        track.scrollLeft = loopWidth ? ((next % loopWidth) + loopWidth) % loopWidth : next
      }
    }
    // Normal vertical mouse wheel continues unhindered to smoothly scroll the page
  }

  return (
    <section
      aria-labelledby="casos-title"
      id="casos"
      className="flex min-h-0 flex-col overflow-hidden bg-mist px-6 py-12 text-navy md:px-10 md:py-16"
    >
      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col">
        <header className="mb-6 shrink-0 md:mb-8">
          <div>
            <p className="section-kicker mb-1.5">
              
            </p>
            <h2 id="casos-title" className="max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl leading-tight tracking-[-.05em]">
              Casos de trabajo
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-orange">
              Proyectos en cinco disciplinas: arquitectura comercial, diseño, tecnología, eventos y administración.
            </p>
          </div>
        </header>

        {/* DESKTOP MARQUEE (lg and up) */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "case-marquee hidden min-h-0 flex-1 lg:block py-2",
            dragging && "case-marquee-dragging"
          )}
        >
          <div className="case-track flex h-full gap-5">
            {[...cases, ...cases].map((item, index) => (
              <CaseCard
                key={`${item.id}-${index}`}
                item={item}
                onClick={() => {
                  if (!dragRef.current.hasDragged) {
                    setSelectedCase(item)
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* MOBILE CAROUSEL (< lg) */}
        <MobileServices onSelect={(item) => setSelectedCase(item)} />

        {/* Bottom Banner */}
        <div className="mt-8 flex shrink-0 items-center justify-between gap-4 border-t border-navy/15 pt-4">
          <p className="font-heading text-base md:text-lg">¿Tenés un proyecto en mente?</p>
          <a
            className="rounded-full bg-orange px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-orange/85"
            href={`${WHATSAPP_URL.split("?text=")[0]}?text=${encodeURIComponent(
              "Hola, quiero consultar por un proyecto."
            )}`}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Full Detail Modal */}
      {selectedCase && (
        <CaseModal
          item={selectedCase}
          open={!!selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  )
}
