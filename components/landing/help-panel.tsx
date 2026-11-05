"use client"

import { useRef } from "react"
import { ArrowRight, X } from "lucide-react"
import { COMPANY_NAME, HELP_PHRASES } from "@/lib/content"
import { ContactActions, EmailLink } from "./contact-links"

export function HelpPanel() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-heading text-xs sm:text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-[#0e0f11] active:scale-95"
      >
        <span>¿Cómo podemos ayudarte?</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="help-title"
        className="on-dark m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-[#0e0f11] p-0 text-white backdrop:bg-black/75"
      >
        <div className="mx-auto flex min-h-full max-w-6xl flex-col px-6 py-8 md:px-10 md:py-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-heading text-xl font-black tracking-tight uppercase text-white">
              {COMPANY_NAME}<span className="text-orange">.</span>
            </span>
            <button
              type="button"
              onClick={close}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-[#0e0f11] active:scale-95"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Cerrar panel</span>
            </button>
          </div>

          <div className="mt-10 md:mt-14">
            <span className="font-mono text-xs font-bold tracking-widest text-orange uppercase">
              // CONSULTORÍA & SOLUCIONES DIRECTAS
            </span>
            <h2
              id="help-title"
              className="mt-2 font-heading text-3xl font-black uppercase tracking-tight text-white md:text-5xl"
            >
              ¿QUÉ DESAFÍO TIENE TU NEGOCIO?
            </h2>
          </div>

          <ul className="mt-10 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {HELP_PHRASES.map((phrase) => (
              <li key={phrase.keyword}>
                <a
                  href={`#${phrase.target}`}
                  onClick={close}
                  className="group flex items-start gap-4 border-b border-white/10 py-5 text-base sm:text-lg leading-snug text-white/80 transition-colors hover:text-white"
                >
                  <ArrowRight
                    className="mt-1 size-5 shrink-0 text-orange transition-transform group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                  <span>
                    {phrase.before}
                    <strong className="font-bold text-white underline decoration-orange/60 underline-offset-4">
                      {phrase.keyword}
                    </strong>
                    {phrase.after}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-5 pt-14 sm:flex-row sm:items-center sm:gap-8 border-t border-white/10">
            <ContactActions onDark />
            <EmailLink className="text-white" />
          </div>
        </div>
      </dialog>
    </>
  )
}
