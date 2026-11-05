"use client"

import { useEffect, useState } from "react"
import { MessageCircle, CalendarDays } from "lucide-react"
import { WHATSAPP_URL, SCHEDULE_URL } from "@/lib/content"

export function WhatsAppFloat() {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isInContactSection, setIsInContactSection] = useState(false)

  // Detectar dirección del scroll para ocultar o atenuar el botón al scrollear hacia abajo (lectura activa)
  useEffect(() => {
    let lastScrollY = window.scrollY
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY

      if (diff > 8 && currentScrollY > 80) {
        // El usuario está scrolleando hacia abajo -> atenuar para no tapar texto
        setIsScrollingDown(true)
      } else if (diff < -5 || currentScrollY <= 80) {
        // El usuario frena o scrollea hacia arriba -> mostrar nítido
        setIsScrollingDown(false)
      }

      lastScrollY = currentScrollY

      // Restablecer opacidad tras una pausa en el scroll
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsScrollingDown(false)
      }, 1000)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // Ocultar completamente cuando la sección #contacto ya está visible en pantalla (evita duplicación)
  useEffect(() => {
    const contactSection = document.getElementById("contacto")
    if (!contactSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInContactSection(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(contactSection)
    return () => observer.disconnect()
  }, [])

  // Si está en la sección de contacto, no renderizar o esconder
  const isHidden = isInContactSection

  return (
    <aside
      aria-label="Canales de contacto flotantes"
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ease-out md:bottom-8 md:right-8 ${
        isHidden
          ? "pointer-events-none translate-y-8 opacity-0 scale-90"
          : isScrollingDown
          ? "translate-y-2 opacity-30 md:translate-y-0 md:opacity-75"
          : "translate-y-0 opacity-100 scale-100"
      }`}
    >
      {/* Versión Mobile (< md): Mini-pill ultra compacto y no invasivo (solo ~135px de ancho) */}
      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-navy/95 p-1 shadow-xl shadow-black/40 backdrop-blur-md md:hidden">
        {/* WhatsApp directo - 1 solo tap */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform active:scale-95"
        >
          <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
          <span>WhatsApp</span>
          <span className="sr-only">(se abre en una pestaña nueva)</span>
        </a>

        {/* Separador vertical sutil */}
        <span className="h-4 w-px bg-white/20" aria-hidden="true" />

        {/* Agenda directa - 1 solo tap */}
        <a
          href={SCHEDULE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar llamada (se abre en una pestaña nueva)"
          className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white active:scale-95"
        >
          <CalendarDays className="size-4 text-orange" aria-hidden="true" />
        </a>
      </div>

      {/* Versión Desktop (>= md): Pill elegante con etiquetas completas */}
      <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-navy/90 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md md:flex">
        {/* Botón WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 font-heading text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-500 hover:shadow-emerald-900/30"
        >
          <MessageCircle className="size-4 transition-transform group-hover:scale-110" aria-hidden="true" />
          <span>WhatsApp</span>
          <span className="sr-only">(se abre en una pestaña nueva)</span>
        </a>

        {/* Botón Agenda */}
        <a
          href={SCHEDULE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-heading text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/20"
        >
          <CalendarDays className="size-4 text-orange transition-transform group-hover:scale-110" aria-hidden="true" />
          <span>Agendar llamada</span>
          <span className="sr-only">(se abre en una pestaña nueva)</span>
        </a>
      </div>
    </aside>
  )
}
