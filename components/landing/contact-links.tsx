import { CalendarDays, MessageCircle } from "lucide-react"
import { CONTACT_EMAIL, SCHEDULE_URL, WHATSAPP_URL } from "@/lib/content"
import { cn } from "@/lib/utils"

export function WhatsAppButton({ className, label = "Contactar por WhatsApp" }: { className?: string; label?: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 font-heading text-base font-semibold text-navy transition-colors hover:bg-[#ff7d36]", className)}><MessageCircle className="size-5" aria-hidden="true" />{label}<span className="sr-only">(se abre en una pestaña nueva)</span></a>
}

export function ScheduleButton({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-heading text-base font-semibold transition-colors", onDark ? "border-white/50 bg-transparent text-white hover:bg-white hover:text-navy" : "border-navy/30 bg-transparent text-navy hover:bg-navy hover:text-white", className)}><CalendarDays className="size-5" aria-hidden="true" />Agendar llamada<span className="sr-only">(se abre en una pestaña nueva)</span></a>
}

export function EmailLink({ className }: { className?: string }) { return <a href={`mailto:${CONTACT_EMAIL}`} className={cn("underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:decoration-current", className)}>{CONTACT_EMAIL}</a> }

export function ContactActions({ onDark = false, className }: { onDark?: boolean; className?: string }) { return <div className={cn("flex flex-col gap-3 sm:flex-row", className)}><WhatsAppButton className="sm:flex-1 sm:justify-center" /><ScheduleButton onDark={onDark} className="sm:flex-1 sm:justify-center" /></div> }
