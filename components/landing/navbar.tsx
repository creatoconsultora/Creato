"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { HERO, WHATSAPP_URL } from "@/lib/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        role="banner"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5 sm:py-3.5" : "py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Navegación principal"
            className="flex items-center justify-between rounded-xl border border-white/12 bg-[#0e0f11]/85 px-4 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-md sm:px-6 sm:py-3"
          >
            {/* Wordmark Brand */}
            <a
              href="#inicio"
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              <span className="font-heading text-lg font-black tracking-[-0.05em] text-white transition-colors group-hover:text-orange sm:text-xl">
                CREATO<span className="text-orange">.</span>
              </span>
              <span className="hidden font-mono text-[10px] tracking-widest text-white/40 uppercase md:inline-block">
                STUDIO
              </span>
            </a>

            {/* Live Status Pill */}
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-medium text-white/80 xl:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase text-white/90">Estudio Operativo</span>
              <span className="text-white/30">|</span>
              <span className="text-white/60">Respuesta en el día</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-7 lg:flex">
              {HERO.navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="font-heading text-xs font-semibold tracking-wider text-white/70 uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:text-orange"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Actions: Primary CTA + Mobile Trigger */}
            <div className="flex items-center gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-orange px-4 py-2 font-heading text-xs font-bold tracking-wider text-white uppercase shadow-md shadow-orange/20 transition-transform duration-160 ease-out hover:bg-[#ff7a45] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Cotizar Proyecto</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10 active:scale-95 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              >
                {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex flex-col bg-[#0e0f11]/95 px-6 pt-24 pb-8 backdrop-blur-xl lg:hidden"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white/80">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>CREATO · RESPUESTA EN EL DÍA</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {HERO.navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3 font-heading text-lg font-bold tracking-tight text-white transition hover:text-orange"
              >
                <span>{label}</span>
                <ArrowUpRight className="size-4 text-white/40" />
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
            <p className="font-mono text-xs text-white/60">
              Arquitectura · Tecnología · Diseño · Gestión
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3.5 font-heading text-sm font-bold text-white uppercase active:scale-95"
            >
              <span>Contactar un Director</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
