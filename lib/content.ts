export const COMPANY_NAME = "creato"

export const WHATSAPP_URL =
  "https://wa.me/5491124870328?text=Hola%2C%20quiero%20presupuestar%20con%20ustedes"
export const SCHEDULE_URL = "https://calendly.com/creatoconsultora/30min"
export const CONTACT_EMAIL = "creatoconsultora@gmail.com"
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
}

export const CONTACT_DETAILS = {
  phoneLabel: "+54 9 3512 10-4298",
  phoneRaw: "+5491124870328",
  hours: "Horarios: Lunes a Viernes de 8:00 a 19:00 hs",
  response: "Atención comercial: Respuesta ágil en el día",
  coverage: "Proyectos y obras: Cobertura presencial en Córdoba, Rosario y Buenos Aires",
  remote: "Tecnología y gestión: Operatoria remota en todo el país",
  administration: "Pliegos y administración",
}

export const HERO = {
  title: "Muchas soluciones, un solo contacto.",
  description: "Somos un equipo de profesionales que une sus talentos para brindar soluciones integrales. Nos especializamos en arquitectura, diseño, sistemas, tecnología, eventos y gestión, operando como un unico punto de contacto para que canalices todas tus necesidades a traves de un solo proveedor.",
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
  description: "Liberate del desgaste de gestionar distintos equipos por separado. Integramos arquitectura, tecnología, diseño y gestión comercial para que enfoques toda tu energía en tu negocio. Un único interlocutor, visión global y cero estrés.",
  benefits: ["Comunicación centralizada (un único responsable).", "Presupuestos globales, claros y sin costos ocultos."],
  rolesTitle: "Muchos profesionales",
  rolesDescription: "Una red de especialistas que reúne distintas miradas para resolver cada desafío con una visión integral.",
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
  { id: "arquitectura", number: "01", name: "Arquitectura y espacios comerciales", image: "/images/pilar-arquitectura.png", alt: "Interior de un local comercial con estanterías de madera y mobiliario a medida", headline: "El entorno físico de tu marca, diseñado para impactar.", description: "Transformamos locales, oficinas y puntos de venta en verdaderas experiencias de marca. Nos encargamos de la arquitectura interior y exterior comercial, mobiliario, cartelería y la instalación definitiva de iluminación y sonido. Además, diseñamos y montamos stands de alto impacto para que tu negocio se destaque en cualquier exposición.", services: ["Arquitectura interior y exterior", "Diseño comercial y manual de arquigrafía", "Diseño y montaje de stands", "Cartelería, mobiliario corporativo e iluminación y sonido permanente para locales u oficinas"] },
  { id: "eventos", number: "02", name: "Eventos y producción audiovisual", image: "/images/pilar-eventos.png", alt: "Escenario de un evento con iluminación cálida y estructura de trusses", headline: "Experiencias memorables, ejecución impecable.", description: "Materializamos momentos únicos para tu equipo y tus clientes. Nos ocupamos de la organización integral de eventos empresariales, lanzamientos y jornadas recreativas. Proveemos todo el soporte técnico, iluminación y sonido temporal necesario para que vos solo te dediques a ser el mejor anfitrión.", services: ["Organización integral de eventos (empresariales, lanzamientos de marca y recreativos)", "Provisión de iluminación y sonido temporal para activaciones y ferias"] },
  { id: "identidad", number: "03", name: "Identidad visual y marketing", image: "/images/pilar-identidad.png", alt: "Mesa de diseño con papelería institucional y muestras de color", headline: "Le damos voz y rostro a tu negocio.", description: "Construimos marcas que conectan y venden. Desde la creación de tu identidad gráfica institucional hasta la gestión diaria de tus redes sociales (community management). Diseñamos y ejecutamos campañas publicitarias estratégicas para posicionarte en el mercado y atraer a tu cliente ideal.", services: ["Diseño gráfico institucional", "Gestión de redes (community management)", "Campañas de publicidad"] },
  { id: "tecnologia", number: "04", name: "Tecnología y desarrollo digital", image: "/images/pilar-tecnologia.png", alt: "Puesto de trabajo con laptop y monitor mostrando código", headline: "Innovación a la medida de tus objetivos.", description: "Impulsamos la transformación digital de tu pyme con herramientas escalables. Desarrollamos páginas web de alto rendimiento y software personalizado que se adapta a tus procesos reales. Garantizamos migraciones de datos 100% seguras para que operes con tecnología de punta y sin interrupciones.", services: ["Desarrollo de páginas web", "Software personalizado a medida", "Migración segura de datos"] },
  { id: "gestion", number: "05", name: "Gestión empresarial, RR.HH. y operaciones", image: "/images/pilar-administracion.png", alt: "Escritorio ordenado con facturas, calculadora y tablet con gráficos", headline: "Optimizamos el motor interno de tu empresa.", description: "Te ayudamos a ordenar la casa para que puedas crecer sin límites. Brindamos consultoría estratégica en operaciones, estructuración eficiente de tus recursos humanos y la implementación de sistemas de facturación modernos. Hacemos que tu negocio sea ágil, ordenado y altamente rentable.", services: ["Consultoría y optimización de operaciones", "Gestión y estructuración de recursos humanos", "Sistemas y gestión de facturación"] },
]

export const STEPS = [
  { title: "Nos contás tu visión", text: "Tenemos una reunión estratégica para entender a fondo la realidad y los objetivos de tu negocio." },
  { title: "Armamos tu equipo ideal", text: "Asignamos a los especialistas exactos que tu proyecto requiere para escalar con éxito." },
  { title: "Presupuesto único e integral", text: "Te entregamos una propuesta global con todas las áreas resueltas. Claro, transparente y sin costos ocultos." },
  { title: "Ejecutamos y coordinamos todo", text: "Llevamos el proyecto a la realidad. Mantenés un único responsable de contacto de principio a fin para tu tranquilidad." },
]

export type HelpPhrase = { before: string; keyword: string; after?: string; target: string }
export const HELP_PHRASES: HelpPhrase[] = [
  { before: "Quiero diseñar mi ", keyword: "local o mi stand", target: "arquitectura" }, { before: "Necesito ", keyword: "cartelería y mobiliario", after: " para mi empresa", target: "arquitectura" }, { before: "Necesito ", keyword: "iluminación y sonido permanente", after: " para mi local u oficina", target: "arquitectura" }, { before: "Quiero organizar un ", keyword: "evento o lanzamiento de marca", target: "eventos" }, { before: "Necesito ", keyword: "iluminación y sonido", after: " para una feria o activación", target: "eventos" }, { before: "Quiero ", keyword: "un logo y una imagen de marca", target: "identidad" }, { before: "Necesito alguien que maneje mis ", keyword: "redes y mi publicidad", target: "identidad" }, { before: "Quiero ", keyword: "una página web o un sistema a medida", target: "tecnologia" }, { before: "Necesito ", keyword: "migrar mis datos", after: " de forma segura", target: "tecnologia" }, { before: "Quiero ", keyword: "optimizar las operaciones", after: " de mi empresa", target: "gestion" }, { before: "Necesito ", keyword: "ordenar mi equipo y mis recursos humanos", target: "gestion" }, { before: "Quiero ", keyword: "ordenar mi facturación", target: "gestion" },
]

export const ON_YOUR_OWN = ["Buscar y alinear a un estudio de arquitectura.", "Contratar una productora aparte para cada evento.", "Contratar a un diseñador externo.", "Buscar desarrolladores independientes.", "Lidiar con otro proveedor para la gestión, los RR.HH. y la facturación.", "Perder días cruzando y comparando presupuestos.", "Sufrir con fechas de entrega desfasadas."]
export const WITH_US = ["Un único director de proyecto a cargo de todo.", "Un presupuesto global, claro y sin costos ocultos.", "Un equipo interdisciplinario trabajando en sincronía.", "Tiempos de ejecución sincronizados y garantizados."]
export const BUDGET_STEPS = [{ title: "Primer contacto", text: "Contanos brevemente qué áreas de tu negocio querés potenciar." }, { title: "Evaluación y propuesta", text: "Diseñamos un plan de acción y un presupuesto integral para tu caso." }, { title: "¡Arrancamos!", text: "Aprobamos el cronograma de trabajo y empezamos a transformar tu empresa." }]

export type CaseImage = { src: string; alt: string; label?: string; kind: "photo" | "screen" }
export type CaseStudy = { id: string; title: string; shortTitle: string; areas: string[]; project: string; work: string[]; images: CaseImage[] }

export const CASES: CaseStudy[] = [
  { id: "ferredesk", title: "FerreDesk: plataforma web de gestión y punto de venta para comercios", shortTitle: "FerreDesk: gestión y punto de venta en la nube", areas: ["tecnologia", "gestion"], project: "Diseñamos y desarrollamos FerreDesk, un sistema de gestión (ERP) y punto de venta en la nube.", work: ["Plataforma web con módulos de ventas, stock, clientes, proveedores, compras y cuentas corrientes.", "Facturación electrónica integrada con ARCA e informes fiscales y de gestión.", "Puesta en marcha y acompañamiento al comercio."], images: [{ src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ferredesk-1-ventas-yLGpRR9jKexmPUqETvZPlnTIPut9C1.jpg", alt: "Pantalla de presupuestos y ventas de FerreDesk", kind: "screen" }, { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ferredesk-2-stock-qPHrtJleyNRRLsBxVvipNpUyB4q28K.jpg", alt: "Listado de productos y stock en FerreDesk", kind: "screen" }, { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ferredesk-3-tesoreria-njuFGWh14GZndhI3WabiWjIZYJPIOT.jpg", alt: "Panel de tesorería con control de fondos", kind: "screen" }] },
  { id: "heladeria", title: "Rebranding integral y arquitectura para heladería líder", shortTitle: "Rebranding y locales para una heladería líder", areas: ["identidad", "arquitectura"], project: "Acompañamos a una reconocida heladería de Córdoba en una transformación total: construimos su nueva identidad desde cero para unificar su presencia gráfica y espacial.", work: ["Identidad y diseño: manual de marca, packaging de productos y diseño de uniformes.", "Arquitectura y obra: diseño de interiores de los locales, arquigrafía, mobiliario a medida y dirección de obra."], images: [{ src: "/images/casos/rebranding.jpg", alt: "Manual de marca y rebranding para heladería líder", kind: "photo" }] },
  { id: "turnos-estetica", title: "Sistema de turnos para centro de estética", shortTitle: "Turnos online para un centro de estética", areas: ["tecnologia"], project: "Un centro de estética manejaba las reservas por mensajes y perdía turnos.", work: ["Agenda online donde el cliente elige servicio, profesional y horario.", "Recordatorios automáticos por WhatsApp o mail.", "Panel para ver la agenda del día y los turnos cancelados."], images: [{ src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estetica-1-reserva-XEQVGy3gC71bEa03r0p6oaoYdo3DIF.jpg", alt: "Paso de elección de fecha y horario en la agenda online", kind: "screen" }, { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estetica-2-confirmacion-q0ghX6468CoNnsEdkr4bq3s9u8KwBT.jpg", alt: "Pantalla de turno confirmado", kind: "screen" }] },
  { id: "bebidas-pop", title: "Producción industrial y material POP para fábrica de bebidas", shortTitle: "Material POP para una fábrica de bebidas", areas: ["arquitectura", "identidad"], project: "Una importante fábrica de bebidas de Córdoba nos confió la materialización de sus elementos de marca para el rubro gastronómico, con un balance entre diseño funcional y producción masiva.", work: ["Diseño industrial de servilleteros y centros de mesa.", "Producción y fabricación a gran escala para asegurar la presencia de la marca en múltiples puntos de venta.", "Renovación de cartelería de fachada en puntos de venta."], images: [{ src: "/images/casos/material-pop.jpg", alt: "Material POP y servilleteros de marca sobre mesa de bar", kind: "photo" }] },
  { id: "concesionaria", title: "Automatización de publicaciones para concesionaria de vehículos usados", shortTitle: "Publicaciones automáticas para una concesionaria", areas: ["tecnologia"], project: "Diseñamos una solución a medida para una concesionaria que necesitaba publicar su inventario en Facebook Marketplace sin cargar cada aviso a mano.", work: ["Extracción automática del inventario con datos, precios y fotos.", "Sincronización del stock con planillas y generación de títulos y descripciones.", "Extensión de navegador que completa el formulario y carga las fotos."], images: [{ src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concesionaria-1-marketplace-kF7qCiJc1Hgmg7F6Ks6T5UU57svTpB.jpg", alt: "Extensión completando automáticamente un aviso de vehículo", kind: "screen" }, { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concesionaria-2-catalogo-6mYRr2dDybdKGmKvc2QNBlZoUBuihq.jpg", alt: "Catálogo de vehículos pendientes de publicar", kind: "screen" }] },
  { id: "farmacias-3d", title: "Planimetría y modelado 3D para red de farmacias", shortTitle: "Modelado 3D para una red de 30+ farmacias", areas: ["arquitectura"], project: "Trabajamos con una red farmacéutica con más de 30 sucursales en Córdoba para optimizar y rentabilizar sus espacios comerciales a través de la visualización arquitectónica.", work: ["Relevamiento y digitalización de planos de los locales existentes.", "Renderización y modelado 3D de las sucursales.", "Material visual estratégico para la venta y concesión de espacios a marcas farmacéuticas."], images: [{ src: "/images/casos/farmacia.jpg", alt: "Modelado 3D y renderizado de local para red de farmacias", kind: "photo" }] },
  { id: "gastronomia-efimera", title: "Diseño de espacios gastronómicos y arquitectura efímera", shortTitle: "Locales gastronómicos y arquitectura efímera", areas: ["arquitectura", "eventos"], project: "Aportamos valor estético y funcional a proyectos de diversa escala, desde locales estáticos hasta experiencias temporales de alto impacto.", work: ["Locales comerciales: diseño integral de restaurantes y bares, enfocado en la experiencia del usuario y la identidad del rubro.", "Eventos: diseño, armado y ambientación de eventos particulares y empresariales con estructuras y montajes temporales."], images: [{ src: "/images/casos/locales-gastronomicos.jpg", alt: "Diseño y ambientación de local gastronómico", kind: "photo" }] },
]

export function getPillar(id: string) { return PILLARS.find((pillar) => pillar.id === id) }
