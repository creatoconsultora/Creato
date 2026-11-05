"use client"

import { useEffect, useState } from "react"
import { ArrowDownRight, Menu } from "lucide-react"
import { HERO } from "@/lib/content"

export function Navbar() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const update = () => setCompact(window.scrollY > 32)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <nav
      aria-label="Secciones principales"
      className={`hero-nav fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 ${
        compact ? "hero-nav-compact" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/15 bg-black/40 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3 shadow-lg shadow-black/10">
        <a
          href="#inicio"
          className="font-heading text-xl font-semibold tracking-[-0.07em] text-white transition hover:text-orange"
        >
          creato<span className="text-orange">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {HERO.navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium tracking-wide text-white/75 transition hover:text-orange"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-orange/20 transition hover:bg-[#ff7d36] hover:scale-[1.03] sm:px-4"
          >
            Contacto <ArrowDownRight className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href="#pilares"
            aria-label="Ir a secciones"
            className="grid size-8 place-items-center rounded-full border border-white/20 text-white transition hover:border-orange hover:text-orange lg:hidden"
          >
            <Menu className="size-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}
