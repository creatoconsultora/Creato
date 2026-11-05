export const COMPANY_NAME = "creato"



export const CONTACT_DETAILS = {
  phoneLabel: "+54 9 11 6858-7718",
  phoneRaw: "+5491168587718",
  hours: "Horarios: Lunes a Viernes de 8:00 a 19:00 hs",
  response: "Atención comercial: Respuesta en el día",
  coverage: "Proyectos y obras: Cobertura presencial en Córdoba, Rosario y Buenos Aires",
  remote: "Tecnología y gestión: Operatoria remota en todo el país",
  administration: "Pliegos y administración",
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT_DETAILS.phoneRaw}?text=Hola%2C%20quiero%20presupuestar%20con%20ustedes`
export const SCHEDULE_URL = "https://calendly.com/creatoconsultora/30min"
export const CONTACT_EMAIL = "creatoconsultora@gmail.com"
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",

} 
export const HERO = {
  title: "Muchas soluciones, un solo contacto.",
  description:
    "Coordinamos arquitectura comercial, diseño, tecnología, eventos y administración bajo un solo presupuesto y un único responsable de proyecto.",
  navigation: [
    ["Áreas", "#pilares"],
    ["Casos", "#casos"],
    ["Proceso", "#proceso"],
    ["Equipo", "#equipo"],
    ["Contacto", "#contacto"],
  ],
} as const

export const TEAM_COPY = {
  title: "Un solo equipo",
  description:
    "Evitá coordinar proveedores independientes por separado. Centralizamos el seguimiento de obra, diseño, sistemas y administración con un director de proyecto asignado.",
  benefits: [
    "Un solo responsable a cargo de la entrega.",
    "Presupuesto cerrado sin costos imprevistos.",
  ],
  rolesTitle: "Especialistas por área",
  rolesDescription:
    "Profesionales técnicos dedicados a cada etapa del proyecto.",
}

export const TEAM_ROLES = [
  "Arquitectura y espacios",
  "Diseño y comunicación",
  "Tecnología y sistemas",
  "Gestión y operaciones",
  "Eventos y producción",
  "Marketing y contenidos",
  "Finanzas y estrategia",
  "Legal y administración",
]

export type Pillar = {
  id: string
  number: string
  name: string
  image: string
  alt: string
  headline: string
  description: string
  services: string[]
}

export const PILLARS: Pillar[] = [
  {
    id: "arquitectura",
    number: "01",
    name: "Arquitectura y espacios comerciales",
    image: "/images/pilar-arquitectura.png",
    alt: "Interior de un local comercial con estanterías de madera y mobiliario",
    headline: "Diseño, obra y montaje para espacios comerciales.",
    description:
      "Desarrollamos arquitectura interior y exterior para locales, oficinas y puntos de venta. Incluye mobiliario, cartelería, iluminación, sonido y armado de stands para exposiciones.",
    services: [
      "Arquitectura interior y exterior",
      "Diseño comercial y manual de arquigrafía",
      "Diseño y montaje de stands",
      "Cartelería, mobiliario e instalación fija de iluminación y sonido",
    ],
  },
  {
    id: "eventos",
    number: "02",
    name: "Eventos y producción audiovisual",
    image: "/images/pilar-eventos.png",
    alt: "Escenario de un evento con iluminación y estructura técnica",
    headline: "Producción técnica y logística para eventos.",
    description:
      "Organizamos eventos corporativos, presentaciones comerciales y actividades institucionales. Proveemos sonido, iluminación y soporte técnico en el lugar.",
    services: [
      "Organización y logística de eventos corporativos y comerciales",
      "Provisión de iluminación y sonido para ferias y activaciones",
    ],
  },
  {
    id: "identidad",
    number: "03",
    name: "Identidad visual y marketing",
    image: "/images/pilar-identidad.png",
    alt: "Mesa de diseño con papelería institucional y muestras de color",
    headline: "Identidad visual y campañas de comunicación.",
    description:
      "Diseñamos sistemas de identidad gráfica, manuales de marca y piezas institucionales. Gestionamos canales digitales y pauta publicitaria según tus objetivos comerciales.",
    services: [
      "Diseño gráfico institucional",
      "Gestión de redes sociales",
      "Campañas de publicidad digital",
    ],
  },
  {
    id: "tecnologia",
    number: "04",
    name: "Tecnología y desarrollo digital",
    image: "/images/pilar-tecnologia.png",
    alt: "Puesto de trabajo con computadora y monitor con código fuente",
    headline: "Desarrollo de software y sitios web.",
    description:
      "Desarrollamos sitios web institucionales, plataformas de gestión comercial y aplicaciones web. Realizamos migraciones de bases de datos y sincronización de sistemas.",
    services: [
      "Desarrollo de sitios web",
      "Software de gestión comercial",
      "Migración de bases de datos",
    ],
  },
  {
    id: "gestion",
    number: "05",
    name: "Gestión empresarial, RR.HH. y operaciones",
    image: "/images/pilar-administracion.png",
    alt: "Escritorio de trabajo con documentación contable y planilla de gestión",
    headline: "Organización operativa y procesos comerciales.",
    description:
      "Revisamos circuitos de trabajo, estructura de puestos e implementamos sistemas de facturación y cobro para ordenar la administración diaria.",
    services: [
      "Revisión y organización de operaciones",
      "Estructuración de puestos de trabajo",
      "Implementación de sistemas de facturación",
    ],
  },
]

export const STEPS = [
  {
    title: "Relevamiento inicial",
    text: "Relevamos los requerimientos técnicos y las prioridades comerciales del negocio.",
  },
  {
    title: "Asignación del equipo",
    text: "Asignamos los profesionales según las disciplinas necesarias para la entrega.",
  },
  {
    title: "Presupuesto unificado",
    text: "Presentamos una propuesta económica detallada que cubre todas las etapas y servicios acordados.",
  },
  {
    title: "Ejecución y entrega",
    text: "Coordinamos los avances y proveedores con un único punto de contacto hasta la entrega final.",
  },
]

export type HelpPhrase = { before: string; keyword: string; after?: string; target: string }
export const HELP_PHRASES: HelpPhrase[] = [
  { before: "Quiero diseñar mi ", keyword: "local o stand", target: "arquitectura" },
  { before: "Necesito ", keyword: "cartelería y mobiliario", after: " para mi empresa", target: "arquitectura" },
  { before: "Necesito ", keyword: "iluminación y sonido", after: " para mi local u oficina", target: "arquitectura" },
  { before: "Quiero organizar un ", keyword: "evento corporativo o feria", target: "eventos" },
  { before: "Necesito ", keyword: "sonido e iluminación", after: " para una activación", target: "eventos" },
  { before: "Quiero ", keyword: "identidad de marca y logotipo", target: "identidad" },
  { before: "Necesito gestión de ", keyword: "redes y publicidad", target: "identidad" },
  { before: "Quiero ", keyword: "un sitio web o software de gestión", target: "tecnologia" },
  { before: "Necesito ", keyword: "migrar datos de sistemas", after: " sin pérdidas", target: "tecnologia" },
  { before: "Quiero ", keyword: "revisar los procesos", after: " de mi empresa", target: "gestion" },
  { before: "Necesito ", keyword: "organizar los puestos de trabajo", target: "gestion" },
  { before: "Quiero ", keyword: "ordenar la facturación", target: "gestion" },
]

export const ON_YOUR_OWN = [
  "Buscar y contratar un estudio de arquitectura.",
  "Contratar una productora técnica para eventos.",
  "Contratar un diseñador independiente.",
  "Buscar desarrolladores de software por separado.",
  "Gestionar otro proveedor para administración y facturación.",
  "Comparar y coordinar múltiples presupuestos desconectados.",
  "Coordinar fechas de entrega entre proveedores sin relación.",
]

export const WITH_US = [
  "Un único director de proyecto a cargo del seguimiento.",
  "Un presupuesto cerrado sin costos imprevistos.",
  "Un equipo multidisciplinario coordinado de forma centralizada.",
  "Cronograma de entregas unificado entre todas las áreas.",
]

export const BUDGET_STEPS = [
  {
    title: "Primer contacto",
    text: "Detallás los requerimientos y las áreas que necesitás resolver.",
  },
  {
    title: "Propuesta técnica",
    text: "Definimos el alcance del trabajo y elaboramos el presupuesto unificado.",
  },
  {
    title: "Inicio de tareas",
    text: "Aprobamos el cronograma de trabajo y comenzamos la ejecución.",
  },
]

export type CaseImage = { src: string; alt: string; label?: string; kind: "photo" | "screen" }
export type CaseStudy = {
  id: string
  title: string
  shortTitle: string
  areas: string[]
  project: string
  work: string[]
  images: CaseImage[]
}

export const CASES: CaseStudy[] = [
  {
    id: "ferredesk",
    title: "FerreDesk: plataforma de gestión y punto de venta para comercios",
    shortTitle: "FerreDesk: gestión y punto de venta",
    areas: ["tecnologia", "gestion"],
    project:
      "Desarrollamos FerreDesk, una plataforma web de gestión comercial (ERP) y facturación para comercios minoristas y mayoristas.",
    work: [
      "Módulos de ventas, control de inventario, compras, proveedores y cuentas corrientes.",
      "Facturación electrónica integrada con ARCA e informes contables periódicos.",
      "Capacitación de personal y puesta en marcha del sistema.",
    ],
    images: [
      {
        src: "/images/casos/ferredesk-ventas.jpg",
        alt: "Pantalla de presupuestos y ventas de FerreDesk",
        kind: "screen",
      },
      {
        src: "/images/casos/ferredesk-stock.jpg",
        alt: "Listado de productos y stock en FerreDesk",
        kind: "screen",
      },
      {
        src: "/images/casos/ferredesk-tesoreria.jpg",
        alt: "Panel de tesorería con control de fondos",
        kind: "screen",
      },
    ],
  },
  {
    id: "heladeria",
    title: "Identidad visual y arquitectura comercial para cadena de heladerías",
    shortTitle: "Identidad visual y locales para cadena de heladerías",
    areas: ["identidad", "arquitectura"],
    project:
      "Desarrollamos la identidad de marca y el proyecto arquitectónico para locales comerciales de una cadena de heladerías en Córdoba.",
    work: [
      "Identidad gráfica: manual de marca, aplicaciones en envases y uniformes.",
      "Arquitectura: distribución de planta, mobiliario comercial, cartelería y dirección de obra.",
    ],
    images: [
      {
        src: "/images/casos/rebranding.jpg",
        alt: "Manual de marca para cadena de heladerías",
        kind: "photo",
      },
    ],
  },
  {
    id: "turnos-estetica",
    title: "Sistema de turnos en línea para centro de estética",
    shortTitle: "Turnos en línea para centro de estética",
    areas: ["tecnologia"],
    project:
      "Desarrollamos una plataforma de reservas para reemplazar la toma manual de turnos por mensaje.",
    work: [
      "Calendario interactivo para selección de servicio, profesional y horario.",
      "Notificaciones automáticas por mensaje y correo electrónico.",
      "Panel de control para administración de turnos del día y cancelaciones.",
    ],
    images: [
      {
        src: "/images/casos/estetica-reserva.jpg",
        alt: "Paso de elección de fecha y horario en la agenda",
        kind: "screen",
      },
      {
        src: "/images/casos/estetica-confirmacion.jpg",
        alt: "Pantalla de turno confirmado",
        kind: "screen",
      },
    ],
  },
  {
    id: "bebidas-pop",
    title: "Fabricación de material POP para fabricante de bebidas",
    shortTitle: "Material POP para fabricante de bebidas",
    areas: ["arquitectura", "identidad"],
    project:
      "Diseñamos y fabricamos elementos de punto de venta para gastronomía, adaptados a producción seriada.",
    work: [
      "Diseño industrial de servilleteros y accesorios de mesa.",
      "Producción seriada para distribución en locales gastronómicos.",
      "Cartelería para fachadas en puntos de venta seleccionados.",
    ],
    images: [
      {
        src: "/images/casos/material-pop.jpg",
        alt: "Material POP y servilleteros de marca sobre mesa de bar",
        kind: "photo",
      },
    ],
  },
  {
    id: "concesionaria",
    title: "Automatización de publicaciones para concesionaria de vehículos",
    shortTitle: "Automatización de publicaciones para concesionaria",
    areas: ["tecnologia"],
    project:
      "Desarrollamos una herramienta para publicar inventario vehicular en Marketplace sin carga manual repetitiva.",
    work: [
      "Extracción estructurada de datos del inventario de vehículos con fotografías.",
      "Sincronización de disponibilidad y precios desde planillas comerciales.",
      "Extensión de navegador que completa formularios y sube imágenes automáticamente.",
    ],
    images: [
      {
        src: "/images/casos/marketplace-autos.jpg",
        alt: "Extensión completando automáticamente un aviso de vehículo",
        kind: "screen",
      },
      {
        src: "/images/casos/catalogo-autos.jpg",
        alt: "Catálogo de vehículos pendientes de publicar",
        kind: "screen",
      },
    ],
  },
  {
    id: "farmacias-3d",
    title: "Documentación gráfica y modelado 3D para red de farmacias",
    shortTitle: "Modelado 3D para red de farmacias",
    areas: ["arquitectura"],
    project:
      "Elaboramos documentación planimétrica y renders 3D para una red de más de 30 sucursales comerciales.",
    work: [
      "Relevamiento y digitalización de planos de plantas comerciales.",
      "Modelado 3D y renders de distribución espacial.",
      "Documentación visual para la asignación y alquiler de espacios comerciales.",
    ],
    images: [
      {
        src: "/images/casos/farmacia.jpg",
        alt: "Modelado 3D y renderizado de local para red de farmacias",
        kind: "photo",
      },
    ],
  },
  {
    id: "gastronomia-efimera",
    title: "Diseño de locales comerciales e instalaciones temporales",
    shortTitle: "Locales comerciales e instalaciones temporales",
    areas: ["arquitectura", "eventos"],
    project:
      "Diseñamos espacios gastronómicos permanentes y estructuras temporales para ferias y activaciones comerciales.",
    work: [
      "Diseño interior de salones gastronómicos, barras y señalética.",
      "Diseño y montaje de estructuras temporales para eventos gastronómicos.",
    ],
    images: [
      {
        src: "/images/casos/locales-gastronomicos.jpg",
        alt: "Diseño y ambientación de local gastronómico",
        kind: "photo",
      },
    ],
  },
]

export function getPillar(id: string) {
  return PILLARS.find((pillar) => pillar.id === id)
}
