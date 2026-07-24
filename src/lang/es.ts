export type Project = {
  title: string
  subtitle: string
  description: string
  impact: string
  tags: string[]
  link?: string
  demo?: string
  color: string
  accent: string
}

export type LanguageContent = {
  code: 'es' | 'en'
  navigation: { profile: string; projects: string; experience: string; contact: string }
  hero: {
    eyebrow: string; role: string; description: string; viewProjects: string; downloadCv: string
    getInTouch: string; github: string; backendFocus: string; nativeSpanish: string; englishB2: string; location: string
  }
  profile: { eyebrow: string; title: string; description: string; technologiesTitle: string }
  technologies: string[]
  projectsSection: { eyebrow: string; title: string; description: string; label: string; repository: string; site: string }
  projects: Project[]
  experienceSection: { eyebrow: string; title: string; description: string }
  experience: { period: string; role: string; company: string; description: string; detail: string }[]
  education: string
  contact: { eyebrow: string; title: string; description: string; write: string }
  footer: { copyright: string; backToTop: string }
  languageSwitch: string
  accessibility: { primaryNavigation: string; mobileNavigation: string; github: string; linkedin: string; menu: string }
}

export const es: LanguageContent = {
  code: 'es',
  navigation: { profile: 'Perfil técnico', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
  hero: {
    eyebrow: 'Ingeniero de software',
    role: 'Ingeniero de Software Backend',
    description: 'Experiencia desarrollando APIs REST, sistemas distribuidos, aplicaciones cloud-native y automatización de procesos con Python, Java, TypeScript, AWS, Docker y Kubernetes.',
    viewProjects: 'Ver proyectos', downloadCv: 'Descargar CV', getInTouch: 'Hablemos', github: 'GitHub',
    backendFocus: 'Enfoque backend', nativeSpanish: 'Español nativo', englishB2: 'Inglés B2', location: 'Medellín, Colombia',
  },
  profile: {
    eyebrow: 'Perfil profesional', title: 'Perfil técnico.',
    description: 'Ingeniero de Software con experiencia profesional desarrollando soluciones escalables en backend, aplicaciones cloud-native y sistemas distribuidos. Diseño APIs REST, arquitecturas basadas en microservicios, pipelines CI/CD e integraciones de IA con Python, Java, TypeScript, AWS, Docker y Kubernetes.',
    technologiesTitle: 'Tech Stack',
  },
  technologies: ['Python', 'Java', 'TypeScript', 'JavaScript', 'Spring Boot', 'Django', 'FastAPI', 'Next.js', 'Vue', 'React', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'RabbitMQ', 'gRPC', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Git', 'REST API', 'OpenAPI', 'OAuth', 'JWT'],
  projectsSection: { eyebrow: 'Proyectos', title: 'Proyectos académicos y personales.', description: 'Aplicaciones web, sistemas distribuidos, automatización y proyectos de datos e inteligencia artificial.', label: 'Proyecto', repository: 'Ver repositorio', site: 'Ver sitio' },
  projects: [
    { title: 'BookNexus', subtitle: 'Recomendaciones de libros con IA', description: 'Plataforma Django que integra LLMs y Google Books API para descubrir libros de forma inteligente.', impact: 'Arquitectura por capas, autenticación, listas de lectura y reportes.', tags: ['Django', 'LLMs', 'Docker', 'GitHub Actions'], link: 'https://github.com/Jhonnathan93/integrating-project-1', demo: 'https://integrating-project-1.vercel.app/book/', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
    { title: 'Bike Network System', subtitle: 'Plataforma distribuida cloud-native', description: 'Sistema de gestión de bicicletas diseñado con servicios desacoplados y comunicación asíncrona.', impact: 'APIs REST, JWT, RabbitMQ, Kubernetes y despliegue sobre AWS.', tags: ['Microservicios', 'RabbitMQ', 'Kubernetes', 'AWS'], link: 'https://github.com/Jhonnathan93/Bike-Network-System', color: 'bg-[#e0eff0]', accent: 'bg-[#32919a]' },
    { title: 'Safe Route', subtitle: 'Rutas peatonales con prioridad de seguridad', description: 'Aplicación web para explorar rutas en Medellín equilibrando distancia y una estimación de riesgo de acoso callejero.', impact: 'Dijkstra, grafo peatonal, Django REST, React, Leaflet y una API con contratos validados.', tags: ['Django REST', 'React', 'TypeScript', 'Docker'], link: 'https://github.com/Jhonnathan93/Safe-route', demo: 'https://safe-route-sepia.vercel.app/', color: 'bg-[#fff1cb]', accent: 'bg-[#ffbd0e]' },
    { title: 'Garden of Eden', subtitle: 'Tienda de plantas y guías de cuidado', description: 'E-commerce para explorar plantas, aprender sobre su cuidado y realizar compras mediante un catálogo completo.', impact: 'Catálogo, autenticación, carrito, pedidos, reseñas, panel de administración y reportes descargables.', tags: ['Laravel', 'MySQL', 'Docker', 'Supabase'], link: 'https://github.com/Jhonnathan93/PlantShop', demo: 'https://plant-shop-sigma-lake.vercel.app/', color: 'bg-[#f4f5da]', accent: 'bg-[#b3b604]' },
    { title: 'Sistema Multiagente', subtitle: 'Pipeline de arquitectura asistida por IA', description: 'Sistema que convierte un brief en artefactos de arquitectura mediante seis agentes especializados y revisión humana.', impact: 'Versionado de artefactos, logs por ejecución, aprobación o rechazo y flujos orquestados con n8n.', tags: ['FastAPI', 'Vue', 'n8n', 'PostgreSQL'], link: 'https://github.com/Jhonnathan93/Multi-agent-challenge', color: 'bg-[#e9e9f4]', accent: 'bg-[#9999e5]' },
    { title: 'Parallelism in a Controlled Environment', subtitle: 'Análisis de concurrencia con CSV', description: 'Comparación de procesamiento secuencial, de un núcleo y multinúcleo para archivos CSV en implementaciones C y Python.', impact: 'Mide tiempo de ejecución y uso de memoria, usando bloques para simular una gestión de memoria paginada.', tags: ['C', 'Python', 'Paralelismo', 'CSV'], link: 'https://github.com/Jhonnathan93/Parallelism-in-a-Controlled-Environment', color: 'bg-[#f4d3d0]', accent: 'bg-[#ff6a51]' },
    { title: 'RPC + MOM Communication System', subtitle: 'Microservicios con tolerancia a fallos', description: 'Sistema distribuido para e-commerce que combina RPC como canal principal y mensajería como fallback ante fallos.', impact: 'API Gateway, gRPC, RabbitMQ, WebSockets, MongoDB, Docker Swarm y monitoreo con Grafana.', tags: ['FastAPI', 'gRPC', 'RabbitMQ', 'Docker Swarm'], link: 'https://github.com/alejoriosm04/rpc-mom-comm', color: 'bg-[#e0eff0]', accent: 'bg-[#32919a]' },
    { title: 'InsightIQ', subtitle: 'Análisis de datos con agentes de IA', description: 'Aplicación para analizar, monitorear y extraer información de datos estructurados mediante modelos de lenguaje.', impact: 'Backend con FastAPI, frontend React y persistencia gestionada con SQLAlchemy y Alembic.', tags: ['FastAPI', 'React', 'LLMs', 'Alembic'], link: 'https://github.com/Jhonnathan93/InsightIQ', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
    { title: 'Numerical Analysis Calculator', subtitle: 'Calculadora de métodos numéricos', description: 'Aplicación web para resolver sistemas de ecuaciones lineales y no lineales, además de métodos de interpolación.', impact: 'Implementa métodos numéricos y devuelve resultados, iteraciones, valores de función y error absoluto.', tags: ['Python', 'Django', 'Análisis numérico', 'Interpolación'], link: 'https://github.com/Jhonnathan93/numerical-analysis-calculator', demo: 'https://numerical-analysis-calculator.vercel.app/', color: 'bg-[#f8ffd9]', accent: 'bg-[#e2ff58]' },
    { title: 'English News Summarization', subtitle: 'Resumen de noticias con LSTM y atención', description: 'Notebook educativo que entrena un modelo sequence-to-sequence para resumir artículos en inglés del conjunto de datos CNN/DailyMail.', impact: 'Encoder-decoder LSTM con atención, embeddings de spaCy y generación con greedy decoding y beam search.', tags: ['Python', 'TensorFlow', 'Keras', 'NLP'], link: 'https://github.com/Jhonnathan93/Applied-ML', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
  ],
  experienceSection: { eyebrow: 'Experiencia', title: 'Experiencia profesional.', description: 'Desarrollo de software, automatización de procesos y trabajo en equipos Agile.' },
  experience: [
    { period: 'Jul. 2025 - Ene. 2026', role: 'Practicante de Ingeniería de Software', company: 'ISA Energía Colombia', description: 'Automaticé la ingesta de datos de objetos técnicos a SAP mediante una aplicación interna, reduciendo un 88,9 % el tiempo de procesamiento manual.', detail: 'Diseñé pipelines ETL para limpiar, transformar y visualizar datos que apoyan decisiones de mantenimiento de la red de transmisión eléctrica.' },
    { period: 'Jul. 2024 - Jun. 2025', role: 'Desarrollador de Software Junior', company: 'Universidad EAFIT', description: 'Construí funcionalidades full-stack para sistemas de análisis urbano: APIs REST, interfaces web y despliegues contenerizados.', detail: 'Colaboré en un equipo Scrum usando Git, Docker y CI/CD para mejorar la calidad, disponibilidad y mantenibilidad de las aplicaciones.' },
  ],
  education: 'Formación: Ingeniería de Sistemas, Universidad EAFIT (2022 - 2026) · Técnica en Desarrollo de Software, CESDE (2020 - 2022).',
  contact: { eyebrow: 'Contacto', title: 'Contacto', description: 'Estoy abierto a conversar sobre oportunidades y proyectos de software.', write: 'Escríbeme' },
  footer: { copyright: 'Todos los derechos reservados.', backToTop: 'Volver arriba' },
  languageSwitch: 'Cambiar idioma a inglés',
  accessibility: { primaryNavigation: 'Navegación principal', mobileNavigation: 'Navegación móvil', github: 'GitHub de Jhonnathan', linkedin: 'LinkedIn de Jhonnathan', menu: 'Abrir menú' },
}
