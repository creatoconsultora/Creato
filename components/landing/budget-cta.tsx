"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X, Phone, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  ON_YOUR_OWN,
  WITH_US,
  WHATSAPP_URL,
  SCHEDULE_URL,
  CONTACT_EMAIL,
  CONTACT_DETAILS,
  PILLARS,
  SOCIAL_LINKS,
} from "@/lib/content"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function BudgetCta() {
  const [tab, setTab] = useState<"traditional" | "experience">("experience")

  return (
    <>
      <section
        id="presupuesto"
        aria-labelledby="presupuesto-title"
        className="relative overflow-hidden bg-muted px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="max-w-2xl">
            <h2 id="presupuesto-title" className="mt-3 text-4xl leading-none text-navy md:text-6xl">
              Trabajemos juntos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-orange md:text-lg">
              Detallanos tus requerimientos y elaboramos una propuesta unificada para resolverlos.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div
              role="tablist"
              aria-label="Comparación de caminos"
              className="mb-4 flex rounded-full border border-navy/10 bg-white p-1 md:hidden shadow-sm"
            >
              <button
                role="tab"
                aria-selected={tab === "traditional"}
                onClick={() => setTab("traditional")}
                className={cn(
                  "flex-1 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                  tab === "traditional"
                    ? "bg-navy text-white shadow-sm"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                Múltiples proveedores
              </button>
              <button
                role="tab"
                aria-selected={tab === "experience"}
                onClick={() => setTab("experience")}
                className={cn(
                  "flex-1 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                  tab === "experience"
                    ? "bg-navy text-white shadow-sm"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                Con Creato
              </button>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Comparison
                title="Múltiples proveedores"
                items={ON_YOUR_OWN}
                icon="x"
                className={tab === "traditional" ? "block" : "hidden md:block"}
              />
              <Comparison
                title="Con Creato"
                items={WITH_US}
                icon="check"
                className={tab === "experience" ? "block" : "hidden md:block"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zona de Contacto & Footer Corporativo Simple (Estilo Autocity con fondo oscuro bg-navy / grafito) */}
      <footer
        id="contacto"
        aria-labelledby="contacto-title"
        className="on-dark relative overflow-hidden border-t border-white/10 bg-navy px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-between">
          <div className="mb-16 max-w-3xl border-b border-white/15 pb-10">
            <h2 id="contacto-title" className="mt-3 text-4xl leading-none tracking-[-.065em] md:text-6xl">
              Solicitá tu presupuesto
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
            {/* Col 1: Logo & Redes Sociales */}
            <div className="lg:col-span-2">
              <a href="#inicio" className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white">
                creato<span className="text-orange">.</span>
              </a>
              <div className="mt-5 flex items-center gap-3 text-white/75">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-orange"
                  aria-label="Instagram de Creato"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-orange"
                  aria-label="LinkedIn de Creato"
                >
                  <LinkedinIcon className="size-5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-orange"
                  aria-label="WhatsApp de Creato"
                >
                  <MessageCircle className="size-5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-orange"
                  aria-label="Correo de Creato"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>

            {/* Col 2: Áreas */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-base font-bold text-white">Áreas</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
                {PILLARS.map((pillar) => (
                  <li key={pillar.id}>
                    <a href={`#${pillar.id}`} className="transition-colors hover:text-orange">
                      {pillar.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Nosotros */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-base font-bold text-white">Nosotros</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
                <li>
                  <a href="#casos" className="transition-colors hover:text-orange">
                    Casos de trabajo
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="transition-colors hover:text-orange">
                    Metodología de trabajo
                  </a>
                </li>
                <li>
                  <a href="#equipo" className="transition-colors hover:text-orange">
                    Un solo equipo
                  </a>
                </li>
                <li>
                  <a href="#presupuesto" className="transition-colors hover:text-orange">
                    Presupuesto unificado
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Contacto */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-base font-bold text-white">Contacto</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-orange"
                  >
                    Contactar por WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={SCHEDULE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-orange"
                  >
                    Agendar llamada
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="whitespace-nowrap transition-colors hover:text-orange"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Teléfono, Horarios y Ubicaciones */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-orange" aria-hidden="true" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-base font-bold text-white transition-colors hover:text-orange"
                >
                  {CONTACT_DETAILS.phoneLabel}
                </a>
              </div>
              <div className="mt-3.5 flex flex-col gap-1.5 text-xs text-white/70 leading-relaxed">
                <p>
                  <strong className="font-semibold text-white">{CONTACT_DETAILS.hours.split(":")[0]}:</strong>{" "}{CONTACT_DETAILS.hours.split(":").slice(1).join(":")}
                </p>
                <p>
                  <strong className="font-semibold text-white">{CONTACT_DETAILS.response.split(":")[0]}:</strong>{" "}{CONTACT_DETAILS.response.split(":").slice(1).join(":")}
                </p>
                <p>
                  <strong className="font-semibold text-white">{CONTACT_DETAILS.coverage.split(":")[0]}:</strong>{" "}{CONTACT_DETAILS.coverage.split(":").slice(1).join(":")}
                </p>
                <p>
                  <strong className="font-semibold text-white">{CONTACT_DETAILS.remote.split(":")[0]}:</strong>{" "}{CONTACT_DETAILS.remote.split(":").slice(1).join(":")}
                </p>
                <p>
                  <strong className="font-semibold text-white">{CONTACT_DETAILS.administration}:</strong> {CONTACT_EMAIL}
                </p>
              </div>
            </div>
          </div>

          {/* Subfooter inferior */}
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>© {new Date().getFullYear()} creatoconsultora.com.ar Todos los derechos reservados</span>
              <span aria-hidden="true">·</span>
              <Link
                href="/terminos"
                className="transition-colors hover:text-white underline-offset-4 hover:underline"
              >
                Términos y Condiciones
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/privacidad"
                className="transition-colors hover:text-white underline-offset-4 hover:underline"
              >
                Privacidad
              </Link>
            </div>
            <p className="font-heading text-xs font-semibold tracking-wider uppercase text-white/70">
              Muchas soluciones, un solo contacto.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

function Comparison({
  title,
  items,
  icon,
  className,
}: {
  title: string
  items: string[]
  icon: "x" | "check"
  className?: string
}) {
  const isCreato = icon === "check"

  return (
    <div
      className={cn(
        "rounded-3xl border p-6 transition-all duration-300 md:p-8",
        isCreato
          ? "on-dark border-white/15 bg-graphite text-white shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_35px_rgba(233,109,69,0.18)] hover:-translate-y-1 hover:border-orange/60 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_45px_rgba(233,109,69,0.25)]"
          : "border-navy/15 bg-white text-navy shadow-[0_18px_60px_rgba(23,23,23,.07)] hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold",
            isCreato
              ? "bg-orange/20 text-orange"
              : "bg-red-500/10 text-red-600"
          )}
        >
          {isCreato ? "Con Creato" : "Múltiples proveedores"}
        </span>
      </div>
      <ul className="mt-5 flex flex-col gap-2.5 text-sm md:gap-3 md:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-0.5 shrink-0">
              {isCreato ? (
                <Check className="size-4 text-orange" />
              ) : (
                <X className="size-4 text-red-500/80" />
              )}
            </span>
            <span className={isCreato ? "text-white/90" : "text-navy/85"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
