import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, CONTACT_DETAILS } from "@/lib/content"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Creato",
  description:
    "Términos y Condiciones generales de uso del sitio web creato.com.ar conforme a las leyes de la República Argentina.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1f1f1f]">
      {/* Barra superior formal */}
      <header className="border-b border-[#dfddd7] bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-tight text-[#171717]"
          >
            Creato<span className="text-[#e96d45]">.</span>
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-[#686762] hover:text-[#171717] transition-colors"
          >
            ← Volver al sitio
          </Link>
        </div>
      </header>

      {/* Cuerpo documental */}
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <header className="border-b border-[#171717] pb-6">
          <p className="text-xs uppercase tracking-widest text-[#686762]">
            Documento Legal Institucional
          </p>
          <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-[#171717] sm:text-3xl">
            Términos y Condiciones de Uso y Contratación
          </h1>
          <p className="mt-2 text-xs text-[#686762]">
            Régimen legal aplicable: Código Civil y Comercial de la Nación · República Argentina · Última actualización: Octubre de 2026
          </p>
        </header>

        <div className="mt-8 space-y-8 text-justify text-sm leading-relaxed text-[#242424]">
          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Primera · Ámbito de Aplicación y Aceptación
            </h2>
            <p>
              Los presentes Términos y Condiciones regulan el acceso, navegación y uso del sitio web <code>creato.com.ar</code> (en adelante, el &ldquo;Sitio Web&rdquo;), administrado y operado por <strong>Creato</strong> (en adelante, el &ldquo;Titular&rdquo;).
            </p>
            <p>
              Toda persona humana o jurídica que acceda, navegue o haga uso de las vías de comunicación consignadas en el Sitio Web adquiere la condición de &ldquo;Usuario&rdquo;, quedando sometida de pleno derecho y sin reserva alguna a las estipulaciones aquí contenidas. Quien no aceptare estas disposiciones deberá abstenerse de operar en el Sitio Web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Segunda · Objeto y Naturaleza del Sitio
            </h2>
            <p>
              El Sitio Web opera como una plataforma de carácter institucional y comercial orientada a la difusión de la propuesta unificada de servicios de consultoría, arquitectura comercial, diseño de identidad, producción técnica de eventos, desarrollo tecnológico y gestión operativa provista por el Titular.
            </p>
            <p>
              El Sitio Web no constituye una plataforma de contratación electrónica instantánea, ni dispone de pasarelas de pago, suscripciones de cobro recurrente automático ni carros de compra digital.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Tercera · Carácter No Vinculante y Perfeccionamiento Contractual
            </h2>
            <p>
              <strong>3.1. Ausencia de oferta vinculante:</strong> De conformidad con el artículo 972 del Código Civil y Comercial de la Nación, la información, descripción de pilares, casos de éxito, metodologías o referencias expuestas en el Sitio Web poseen naturaleza meramente informativa y de invitación a entablar tratativas preliminares, no revistiendo carácter de oferta contractual irrevocable ni vinculante.
            </p>
            <p>
              <strong>3.2. Perfeccionamiento de los contratos:</strong> La contratación de los servicios de Creato queda formalizada únicamente tras la elaboración de una propuesta técnica y económica individualizada por escrito, y la ulterior aceptación expresa, suscripción de orden de trabajo, pliego de condiciones o contrato particular debidamente perfeccionado entre las partes.
            </p>
            <p>
              <strong>3.3. Vigencia de presupuestos:</strong> Las cotizaciones remitidas formalmente por correo electrónico o instrumento escrito tendrán la vigencia temporal taxativamente indicada en el documento de propuesta, sujeta a disponibilidad de insumos, variaciones de plaza y cronograma técnico convenido.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Cuarta · Propiedad Intelectual e Industrial
            </h2>
            <p>
              El código fuente, arquitectura del software, logotipos, isotipos, marcas comerciales, nombres de dominio, maquetaciones gráficas, fotografías, renders, manuales de procedimiento, textos descriptivos y material audiovisual expuestos en el Sitio Web constituyen creaciones amparadas por la <strong>Ley Nacional N° 11.723 de Propiedad Intelectual</strong>, la Ley N° 22.362 de Marcas y Designaciones, y la normativa complementaria de la República Argentina.
            </p>
            <p>
              Queda expresamente prohibida su reproducción, copia, distribución, comunicación pública, adaptación o descompilación total o parcial sin autorización previa, expresa y por escrito otorgada por el Titular.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Quinta · Obligaciones y Conducta del Usuario
            </h2>
            <p>
              El Usuario se compromete a hacer un uso lícito del Sitio Web y sus canales de contacto asociados, absteniéndose de:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#242424]/90">
              <li>Llevar a cabo acciones destinadas a vulnerar los sistemas de seguridad, autenticación o integridad de los servidores.</li>
              <li>Saturar de manera malintencionada el ancho de banda o servidores vinculados al Sitio Web.</li>
              <li>Remitir mensajes con contenido difamatorio, injurioso, ilegal o spam a través de los enlaces de contacto.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Sexta · Exclusión de Garantías y Responsabilidad Técnica
            </h2>
            <p>
              El Titular no asume responsabilidad alguna por:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#242424]/90">
              <li>Interrupciones temporales del servicio derivadas de cortes de energía, caídas de conectividad de los proveedores de internet o tareas de mantenimiento de servidores.</li>
              <li>Daños o perjuicios derivados de interferencias, omisiones, virus informáticos o sobrecargas en las redes de telecomunicaciones ajenas al control directo del Titular.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Séptima · Enlaces a Servicios de Terceros
            </h2>
            <p>
              El Sitio Web incorpora enlaces directos de comunicación mediante servicios provistos por terceros (WhatsApp / Meta Platforms Inc., Calendly LLC, plataformas de redes sociales). El Titular no ejerce auditoría ni garantiza la continua disponibilidad ni la seguridad intrínseca de dichas aplicaciones de terceros, rigiéndose la relación entre el Usuario y tales plataformas por sus respectivas condiciones legales.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Octava · Modificaciones de los Términos
            </h2>
            <p>
              El Titular se reserva el derecho de modificar o sustituir en cualquier momento los presentes Términos y Condiciones, los cuales resultarán exigibles a partir de su publicación en el Sitio Web. El uso continuado del Sitio Web con posterioridad a tales cambios constituirá plena aceptación de los nuevos términos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Novena · Nulidad Parcial y Subsistencia
            </h2>
            <p>
              Si alguna cláusula de los presentes Términos fuera declarada nula o ineficaz por autoridad jurisdiccional competente, tal nulidad no afectará la validez de las restantes estipulaciones, las cuales mantendrán plena fuerza vinculante.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Décima · Ley Aplicable y Jurisdicción
            </h2>
            <p>
              Los presentes Términos y Condiciones se regirán e interpretarán de conformidad con las leyes vigentes de la <strong>República Argentina</strong>.
            </p>
            <p>
              Para dirimir cualquier controversia, conflicto o reclamación que pudiere surgir con motivo de la validez, interpretación o ejecución de este instrumento, las partes se someten en forma expresa a la competencia de los <strong>Tribunales Ordinarios de la República Argentina</strong>, renunciando de manera expresa e incondicional a cualquier otro fuero o jurisdicción que pudiere llegar a corresponderles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Cláusula Undécima · Vía Formal de Notificaciones
            </h2>
            <p>
              Para todas las comunicaciones o requerimientos legales vinculados al Sitio Web, el Titular constituye como domicilio electrónico la cuenta de correo: <strong>{CONTACT_EMAIL}</strong> y la línea de contacto: <strong>{CONTACT_DETAILS.phoneLabel}</strong>.
            </p>
          </section>
        </div>

        <footer className="mt-12 flex items-center justify-between border-t border-[#dfddd7] pt-6 text-xs text-[#686762]">
          <Link href="/privacidad" className="underline hover:text-[#171717]">
            Ver Política de Privacidad
          </Link>
          <Link href="/" className="hover:text-[#171717]">
            ← Volver al sitio principal
          </Link>
        </footer>
      </main>
    </div>
  )
}
