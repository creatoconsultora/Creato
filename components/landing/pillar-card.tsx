"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, MessageCircle, X } from "lucide-react"
import { SCHEDULE_URL, WHATSAPP_URL, type Pillar } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"

export function PillarModal({
  pillar,
  open,
  onClose,
}: {
  pillar: Pillar
  open: boolean
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = `${pillar.id}-modal-title`

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      className="m-auto h-[88dvh] max-h-[680px] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-2xl bg-white p-0 text-navy shadow-2xl backdrop:bg-black/60 outline-none"
    >
      <div className="flex h-full w-full flex-col md:flex-row overflow-hidden">
        {/* Desktop Left Column: Fixed Cover Image */}
        <div className="relative hidden h-full w-5/12 shrink-0 overflow-hidden bg-navy md:block lg:w-1/2">
          <ImageWithSkeleton
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 40vw"
            className="object-cover"
            skeletonClassName="bg-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-orange">
              {pillar.number} · {pillar.name.split(" ")[0]}
            </span>
            <p className="mt-1 text-xs leading-relaxed text-white/85 line-clamp-2">
              {pillar.headline}
            </p>
          </div>
        </div>

        {/* Right Column: Fixed Header, Scrollable Content, Fixed Footer */}
        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-white">
          {/* Pinned Fixed Header */}
          <div className="z-10 flex shrink-0 items-start justify-between gap-4 border-b border-navy/10 bg-white px-5 py-4 md:px-8 md:py-5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-navy/10 md:hidden bg-mist">
                <ImageWithSkeleton
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                  skeletonClassName="bg-navy/10"
                />
              </div>
              <div className="min-w-0">
                <span className="block font-heading text-xs font-bold tracking-wider text-orange uppercase">
                  {pillar.number} · Área de servicio
                </span>
                <h2
                  id={titleId}
                  className="font-heading text-lg font-bold leading-snug text-navy md:text-2xl truncate md:text-wrap"
                >
                  {pillar.name}
                </h2>
              </div>
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
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4 overscroll-contain md:px-8 md:py-6 [-ms-overflow-style:none] [scrollbar-width:thin]">
            <div>
              <p className="font-heading text-sm font-semibold leading-relaxed text-navy md:text-base">
                {pillar.headline}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                {pillar.description}
              </p>
            </div>

            <div className="border-t border-navy/10 pt-3">
              <p className="mb-2.5 text-xs font-bold tracking-wider text-navy/70 uppercase">
                Servicios incluidos:
              </p>
              <ul className="flex flex-col gap-2">
                {pillar.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2.5 text-xs text-navy/85 md:text-sm"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden="true"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pinned Fixed Footer */}
          <div className="z-10 shrink-0 border-t border-navy/10 bg-mist/70 p-3.5 backdrop-blur-sm md:px-8 md:py-4">
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <a
                href={WHATSAPP_URL}
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
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/30 bg-white px-4 py-2.5 font-heading text-xs md:text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                <span>Agendar llamada</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export function PillarCard({
  pillar,
  className,
}: {
  pillar: Pillar
  className?: string
  expanded?: boolean
}) {
  const [open, setOpen] = useState(false)

  const openDialog = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === `#${pillar.id}`) {
        document.getElementById(pillar.id)?.scrollIntoView({ behavior: "smooth", block: "center" })
        openDialog()
      }
    }
    onHash()
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [pillar.id])

  return (
    <>
      <article
        id={pillar.id}
        className={cn(
          "on-dark group relative h-full min-h-0 cursor-pointer overflow-hidden rounded-xl bg-navy text-white transition-[width,transform] duration-500",
          className
        )}
        onClick={openDialog}
        onMouseDown={(event) => {
          event.preventDefault()
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            openDialog()
          }
        }}
        role="button"
        tabIndex={0}
      >
        <ImageWithSkeleton
          src={pillar.image}
          alt={pillar.alt}
          fill
          sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          skeletonClassName="bg-white/10"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
          <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-500 group-hover:mb-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="min-h-0 overflow-hidden">
              <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/85">
                {pillar.headline}
              </p>
              <ul className="flex flex-col gap-1.5">
                {pillar.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-sm text-white md:text-base"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden="true"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl leading-tight text-white">
              <span className="mb-2 block font-sans text-sm font-medium text-white/70">
                {pillar.number}
              </span>
              {pillar.name}
            </h3>
          </div>
        </div>
      </article>

      {open && <PillarModal pillar={pillar} open={open} onClose={closeDialog} />}
    </>
  )
}
