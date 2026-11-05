import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, CONTACT_DETAILS } from "@/lib/content"

export const metadata: Metadata = {
  title: "Política de Privacidad | Creato",
  description:
    "Política de Privacidad y Protección de Datos Personales conforme a la Ley N° 25.326 de la República Argentina.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacidadPage() {
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
            Política de Privacidad y Protección de Datos Personales
          </h1>
          <p className="mt-2 text-xs text-[#686762]">
            Marco Normativo: Ley Nacional N° 25.326 y normas reglamentarias · República Argentina · Última actualización: Octubre de 2026
          </p>
        </header>

        <div className="mt-8 space-y-8 text-justify text-sm leading-relaxed text-[#242424]">
          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 1 · Marco Regulatorio y Responsable
            </h2>
            <p>
              El presente documento establece los términos bajo los cuales <strong>Creato</strong> (en adelante, el &ldquo;Responsable&rdquo; o &ldquo;Creato&rdquo;), a través del sitio web <code>creato.com.ar</code> (el &ldquo;Sitio Web&rdquo;), efectúa el tratamiento de datos personales en el marco de sus actividades institucionales y de consultoría comercial.
            </p>
            <p>
              El tratamiento de datos se ajusta en forma estricta a los preceptos de la <strong>Ley Nacional N° 25.326 de Protección de los Datos Personales</strong>, su Decreto Reglamentario N° 1558/2001 y las disposiciones concordantes dictadas por la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 2 · Naturaleza de la Plataforma y Datos Tratados
            </h2>
            <p>
              El Sitio Web posee fines estrictamente informativos y de difusión comercial. El Responsable hace constar expresamente que:
            </p>
            <p>
              <strong>2.1. Inexistencia de registro en línea:</strong> El Sitio Web no exige suscripción, creación de usuario, contraseñas ni suministro de datos sensibles o financieros. No se procesan transacciones bancarias, números de cuenta ni cobros automatizados a través del Sitio Web.
            </p>
            <p>
              <strong>2.2. Datos suministrados por el Usuario:</strong> Los únicos datos de contacto que recopila el Responsable corresponden a aquellos que el propio Usuario remite de manera voluntaria al entablar comunicación directa mediante correo electrónico (<a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>), servicios de mensajería instantánea (WhatsApp) o herramientas de agenda (Calendly). Dichos datos comprenden exclusivamente nombre, número telefónico, correo electrónico, denominación comercial y especificaciones del proyecto o consulta remitida.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 3 · Finalidad y Prohibición de Cesión
            </h2>
            <p>
              Los datos facilitados serán utilizados exclusivamente para atender las solicitudes de contacto, formular cotizaciones o propuestas comerciales detalladas, y coordinar la ejecución de los servicios encomendados.
            </p>
            <p>
              El Responsable no vende, alquila, comercializa ni cede bases de datos personales a terceros, con excepción de aquellos requerimientos expresos emanados de autoridad judicial o administrativa competente en virtud de ley imperativa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 4 · Información Técnica de Navegación
            </h2>
            <p>
              El Sitio Web puede hacer uso de herramientas de analítica y medición técnica de rendimiento (incluyendo Vercel Web Analytics) orientadas a relevar tráfico agregado, tipo de navegador, sistema operativo y país de origen de la conexión. Dicha información se procesa en forma agregada y anónima, con el fin de optimizar la disponibilidad y desempeño del servidor, sin individualización de usuarios ni aplicación de perfiles publicitarios invasivos.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 5 · Plataformas y Enlaces de Terceros
            </h2>
            <p>
              El Sitio Web pone a disposición enlaces de redireccionamiento hacia plataformas de terceros (tales como WhatsApp, Calendly, LinkedIn o Instagram). Al acceder a tales plataformas, el tratamiento de los datos que el Usuario proporcione en ellas quedará sujeto de pleno derecho a los términos y políticas de privacidad particulares de cada uno de dichos proveedores, quedando el Responsable exento de toda injerencia o responsabilidad sobre el tratamiento que aquéllos realicen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 6 · Derechos de Acceso, Rectificación, Actualización y Supresión (ARCO)
            </h2>
            <p>
              En cumplimiento de los artículos 14, 15 y 16 de la Ley N° 25.326, el titular de los datos personales tiene derecho a solicitar y obtener información de sus datos personales incluidos en los registros o bancos de datos del Responsable, así como a exigir la rectificación, actualización o supresión de los mismos en cualquier momento y en forma enteramente gratuita.
            </p>
            <p>
              Para el ejercicio fehaciente de estos derechos, el titular deberá cursar solicitud por escrito vía correo electrónico a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-medium text-[#171717]">
                {CONTACT_EMAIL}
              </a>
              , acreditando fehacientemente su identidad e indicando el objeto puntual de su requerimiento.
            </p>
          </section>

          <section className="space-y-2 border-y border-[#dfddd7] py-4 bg-white px-4">
            <h2 className="font-heading text-xs font-bold uppercase tracking-wider text-[#171717]">
              Artículo 7 · Cláusula Legal Informativa (AAIP)
            </h2>
            <p className="text-xs italic leading-relaxed text-[#242424]">
              &ldquo;La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.&rdquo;
            </p>
            <p className="text-[11px] text-[#686762]">
              Sede institucional: Av. Pte. Gral. Julio A. Roca 710, Piso 3°, Ciudad Autónoma de Buenos Aires. Enlace oficial: www.argentina.gob.ar/aaip/datospersonales
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 8 · Deber de Confidencialidad y Seguridad
            </h2>
            <p>
              El Responsable adopta las medidas técnicas, organizativas y de procedimiento exigidas por el artículo 9 de la Ley N° 25.326 para garantizar la seguridad de los datos personales y evitar su alteración, pérdida o tratamiento no autorizado. El deber de confidencialidad subsistirá aun después de finalizada la relación contractual o comercial con el Usuario.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 9 · Actualizaciones
            </h2>
            <p>
              El Responsable se reserva el derecho de modificar la presente Política de Privacidad a los fines de adaptarla a reformas normativas o jurisprudenciales que pudieran sobrevenir. La versión vigente será siempre la publicada en este documento dentro del Sitio Web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-[#171717]">
              Artículo 10 · Canal Institucional de Notificaciones
            </h2>
            <p>
              A todos los efectos derivados de la presente política, se fija como canal de contacto formal el correo electrónico: <strong>{CONTACT_EMAIL}</strong> y la línea de atención: <strong>{CONTACT_DETAILS.phoneLabel}</strong>.
            </p>
          </section>
        </div>

        <footer className="mt-12 flex items-center justify-between border-t border-[#dfddd7] pt-6 text-xs text-[#686762]">
          <Link href="/terminos" className="underline hover:text-[#171717]">
            Ver Términos y Condiciones
          </Link>
          <Link href="/" className="hover:text-[#171717]">
            ← Volver al sitio principal
          </Link>
        </footer>
      </main>
    </div>
  )
}
