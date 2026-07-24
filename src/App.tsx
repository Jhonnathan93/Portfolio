import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GitFork,
  GraduationCap,
  Layers3,
  Link,
  Mail,
  Menu,
  ServerCog,
  X,
} from 'lucide-react'
import { useState } from 'react'

const profile = {
  name: 'Jhonnathan Ocampo',
  role: 'Ingeniero de Software Backend',
  email: 'jhonnathanocampo118@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jhonnathan-ocampo',
  github: 'https://github.com/Jhonnathan93',
}

const skills = [
  { label: 'Python', tone: 'bg-[#d9e4f2] text-[#315784]' },
  { label: 'Java & Spring', tone: 'bg-[#fff1cb] text-[#8a5a00]' },
  { label: 'FastAPI & Django REST', tone: 'bg-[#e0eff0] text-[#21757d]' },
  { label: 'React, Next.js & Vue', tone: 'bg-[#e6e4f6] text-[#57479d]' },
  { label: 'Laravel', tone: 'bg-[#ffe4cf] text-[#a24b13]' },
  { label: 'PostgreSQL & MongoDB', tone: 'bg-[#e4f2e9] text-[#27704a]' },
  { label: 'RabbitMQ & gRPC', tone: 'bg-[#f9e2eb] text-[#9e4268]' },
  { label: 'AWS', tone: 'bg-[#fff1cb] text-[#8a5a00]' },
  { label: 'Docker & Kubernetes', tone: 'bg-[#d9e4f2] text-[#315784]' },
  { label: 'CI/CD', tone: 'bg-[#e0eff0] text-[#21757d]' },
]

const projects = [
  {
    title: 'BookNexus',
    subtitle: 'Recomendaciones de libros con IA',
    description:
      'Plataforma Django que integra LLMs y Google Books API para descubrir libros de forma inteligente.',
    impact: 'Arquitectura por capas, autenticación, listas de lectura y reportes.',
    tags: ['Django', 'LLMs', 'Docker', 'GitHub Actions'],
    link: 'https://github.com/Jhonnathan93/integrating-project-1',
    demo: 'https://integrating-project-1.vercel.app/book/',
    color: 'bg-[#d9e4f2]',
    accent: 'bg-[#5180c2]',
  },
  {
    title: 'Bike Network System',
    subtitle: 'Plataforma distribuida cloud-native',
    description:
      'Sistema de gestión de bicicletas diseñado con servicios desacoplados y comunicación asíncrona.',
    impact: 'APIs REST, JWT, RabbitMQ, Kubernetes y despliegue sobre AWS.',
    tags: ['Microservicios', 'RabbitMQ', 'Kubernetes', 'AWS'],
    link: 'https://github.com/Jhonnathan93/Bike-Network-System',
    color: 'bg-[#e0eff0]',
    accent: 'bg-[#32919a]',
  },
  {
    title: 'Safe Route',
    subtitle: 'Rutas peatonales con prioridad de seguridad',
    description:
      'Aplicación web para explorar rutas en Medellín equilibrando distancia y una estimación de riesgo de acoso callejero.',
    impact: 'Dijkstra, grafo peatonal, Django REST, React, Leaflet y una API con contratos validados.',
    tags: ['Django REST', 'React', 'TypeScript', 'Docker'],
    link: 'https://github.com/Jhonnathan93/Safe-route',
    demo: 'https://safe-route-sepia.vercel.app/',
    color: 'bg-[#fff1cb]',
    accent: 'bg-[#ffbd0e]',
  },
  {
    title: 'Garden of Eden',
    subtitle: 'Tienda de plantas y guías de cuidado',
    description:
      'E-commerce para explorar plantas, aprender sobre su cuidado y realizar compras mediante un catálogo completo.',
    impact: 'Catálogo, autenticación, carrito, pedidos, reseñas, panel de administración y reportes descargables.',
    tags: ['Laravel', 'MySQL', 'Docker', 'Supabase'],
    link: 'https://github.com/Jhonnathan93/PlantShop',
    demo: 'https://plant-shop-sigma-lake.vercel.app/',
    color: 'bg-[#e4f2e9]',
    accent: 'bg-[#32919a]',
  },
  {
    title: 'Sistema Multiagente',
    subtitle: 'Pipeline de arquitectura asistida por IA',
    description:
      'Sistema que convierte un brief en artefactos de arquitectura mediante seis agentes especializados y revisión humana.',
    impact: 'Versionado de artefactos, logs por ejecución, aprobación o rechazo y flujos orquestados con n8n.',
    tags: ['FastAPI', 'Vue', 'n8n', 'PostgreSQL'],
    link: 'https://github.com/Jhonnathan93/Multi-agent-challenge',
    color: 'bg-[#e6e4f6]',
    accent: 'bg-[#6d5caf]',
  },
  {
    title: 'Parallelism in a Controlled Environment',
    subtitle: 'Análisis de concurrencia con CSV',
    description:
      'Comparación de procesamiento secuencial, de un núcleo y multinúcleo para archivos CSV en implementaciones C y Python.',
    impact: 'Mide tiempo de ejecución y uso de memoria, usando bloques para simular una gestión de memoria paginada.',
    tags: ['C', 'Python', 'Paralelismo', 'CSV'],
    link: 'https://github.com/Jhonnathan93/Parallelism-in-a-Controlled-Environment',
    color: 'bg-[#ffe4cf]',
    accent: 'bg-[#e07b39]',
  },
  {
    title: 'RPC + MOM Communication System',
    subtitle: 'Microservicios con tolerancia a fallos',
    description:
      'Sistema distribuido para e-commerce que combina RPC como canal principal y mensajería como fallback ante fallos.',
    impact: 'API Gateway, gRPC, RabbitMQ, WebSockets, MongoDB, Docker Swarm y monitoreo con Grafana.',
    tags: ['FastAPI', 'gRPC', 'RabbitMQ', 'Docker Swarm'],
    link: 'https://github.com/alejoriosm04/rpc-mom-comm',
    color: 'bg-[#f9e2eb]',
    accent: 'bg-[#b55c80]',
  },
  {
    title: 'InsightIQ',
    subtitle: 'Análisis de datos con agentes de IA',
    description:
      'Aplicación para analizar, monitorear y extraer información de datos estructurados mediante modelos de lenguaje.',
    impact: 'Backend con FastAPI, frontend React y persistencia gestionada con SQLAlchemy y Alembic.',
    tags: ['FastAPI', 'React', 'LLMs', 'Alembic'],
    link: 'https://github.com/Jhonnathan93/InsightIQ',
    color: 'bg-[#d9e4f2]',
    accent: 'bg-[#5180c2]',
  },
  {
    title: 'Numerical Analysis Calculator',
    subtitle: 'Calculadora de métodos numéricos',
    description:
      'Aplicación web para resolver sistemas de ecuaciones lineales y no lineales, además de métodos de interpolación.',
    impact: 'Implementa métodos numéricos y devuelve resultados, iteraciones, valores de función y error absoluto.',
    tags: ['Python', 'Django', 'Análisis numérico', 'Interpolación'],
    link: 'https://github.com/Jhonnathan93/numerical-analysis-calculator',
    color: 'bg-[#fff1cb]',
    accent: 'bg-[#ffbd0e]',
  },
  {
    title: 'English News Summarization',
    subtitle: 'Resumen de noticias con LSTM y atención',
    description:
      'Notebook educativo que entrena un modelo sequence-to-sequence para resumir artículos en inglés del conjunto de datos CNN/DailyMail.',
    impact: 'Encoder-decoder LSTM con atención, embeddings de spaCy y generación con greedy decoding y beam search.',
    tags: ['Python', 'TensorFlow', 'Keras', 'NLP'],
    link: 'https://github.com/Jhonnathan93/Applied-ML',
    color: 'bg-[#e0eff0]',
    accent: 'bg-[#32919a]',
  },
]

const experience = [
  {
    period: 'Jul. 2025 - Ene. 2026',
    role: 'Practicante de Ingeniería de Software',
    company: 'ISA Energía Colombia',
    description:
      'Automaticé la ingesta de datos de objetos técnicos a SAP mediante una aplicación interna, reduciendo un 88,9 % el tiempo de procesamiento manual.',
    detail:
      'Diseñé pipelines ETL para limpiar, transformar y visualizar datos que apoyan decisiones de mantenimiento de la red de transmisión eléctrica.',
  },
  {
    period: 'Jul. 2024 - Jun. 2025',
    role: 'Desarrollador de Software Junior',
    company: 'Universidad EAFIT',
    description:
      'Construí funcionalidades full-stack para sistemas de análisis urbano: APIs REST, interfaces web y despliegues contenerizados.',
    detail:
      'Colaboré en un equipo Scrum usando Git, Docker y CI/CD para mejorar la calidad, disponibilidad y mantenibilidad de las aplicaciones.',
  },
]

function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  download = false,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
  download?: boolean
}) {
  const styles = variant === 'primary'
    ? 'bg-[#5180c2] text-white shadow-[0_10px_20px_rgba(81,128,194,0.25)] hover:bg-[#426eac]'
    : variant === 'light'
      ? 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white'
      : 'border border-[#d9e4f2] bg-white text-[#172033] hover:border-[#9eb8dd] hover:bg-[#f7f9fc]'

  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children && <div className="mt-5 text-base leading-7 text-[#566274]">{children}</div>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(30,58,96,0.06)] backdrop-blur-md sm:px-5">
        <a href="#inicio" className="font-display text-lg font-bold tracking-[-0.04em] text-[#101827]">
          Jhonnathan<span className="text-[#5180c2]">.</span>
        </a>

        <nav className="hidden items-center rounded-full bg-[#f4f6f8] p-1 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-1.5 text-xs font-bold text-[#4e5a6c] transition hover:bg-white hover:text-[#172033]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-[#172033] transition hover:text-[#5180c2]" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Jhonnathan">
            <GitFork size={18} />
          </a>
          <a className="text-[#172033] transition hover:text-[#5180c2]" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Jhonnathan">
            <Link size={18} />
          </a>
        </div>

        <button className="text-[#172033] md:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white bg-white p-2 shadow-lg md:hidden" aria-label="Navegación móvil">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#4e5a6c] hover:bg-[#f4f6f8]">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-[#d9e4f2]/65 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[34rem] size-96 rounded-full bg-[#fff1cb]/65 blur-3xl" />
      <Header />

      <main>
        <section id="inicio" className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-6 pb-20 pt-16 sm:pt-8">
          <div className="w-full max-w-3xl">
              <p className="eyebrow">Ingeniero de software</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-[#101827] sm:text-7xl">Jhonnathan Ocampo</h1>
            <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-[#5180c2] sm:text-3xl">Ingeniero de Software Backend</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4e5a6c]">Experiencia desarrollando APIs REST, sistemas distribuidos, aplicaciones cloud-native y automatización de procesos con Python, Java, TypeScript, AWS, Docker y Kubernetes.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#proyectos">Ver proyectos <ArrowDown size={16} /></Button>
              <Button href="/Jhonnathan-Ocampo-CV.pdf" variant="secondary" download>Descargar CV <Download size={16} /></Button>
              <Button href={`mailto:${profile.email}`} variant="secondary">Hablemos <Mail size={16} /></Button>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-[#315784] transition hover:bg-[#d9e4f2]">GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5 text-sm font-bold">
              <span className="rounded-full bg-[#e4f2e9] px-4 py-2 text-[#27704a]">Backend focus</span>
              <span className="rounded-full bg-[#d9e4f2] px-4 py-2 text-[#315784]">Español nativo</span>
              <span className="rounded-full bg-[#fff1cb] px-4 py-2 text-[#8a5a00]">Inglés B2</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#566274]"><span className="size-2 rounded-full bg-[#32919a]" /> Medellín, Colombia</span>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="relative scroll-mt-28 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow="Perfil" title="Backend, cloud y calidad de software.">
            Desarrollo APIs, aplicaciones cloud-native y procesos automatizados. Trabajo con arquitectura por capas, microservicios, pruebas y CI/CD.
          </SectionIntro>
          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            <InfoCard icon={<ServerCog />} title="Backend" description="APIs REST, autenticación y lógica de negocio con Python, Java y arquitecturas desacopladas." color="bg-[#d9e4f2] text-[#315784]" />
            <InfoCard icon={<Layers3 />} title="Cloud & DevOps" description="Contenedores, CI/CD e infraestructura cloud para despliegue y operación." color="bg-[#e0eff0] text-[#21757d]" />
            <InfoCard icon={<Code2 />} title="Calidad de software" description="Pruebas, análisis estático y automatización como parte natural del ciclo de desarrollo." color="bg-[#fff1cb] text-[#8a5a00]" />
          </div>
          <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-[#e7edf5] bg-white p-6 sm:p-8">
            <p className="mb-5 font-display text-lg font-bold tracking-[-0.03em]">Tecnologías con las que trabajo</p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => <span key={skill.label} className={`rounded-xl px-4 py-2.5 text-sm font-bold ${skill.tone}`}>{skill.label}</span>)}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-24 bg-white/60 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow="Proyectos" title="Proyectos académicos y personales.">
            Aplicaciones web, sistemas distribuidos, automatización y proyectos de datos e inteligencia artificial.
          </SectionIntro>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow="Experiencia" title="Experiencia profesional.">
            Desarrollo de software, automatización de procesos y trabajo en equipos Agile.
          </SectionIntro>
          <div className="mx-auto mt-14 max-w-4xl space-y-5">
            {experience.map((item, index) => <ExperienceCard key={item.company} {...item} last={index === experience.length - 1} />)}
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl items-center gap-4 rounded-2xl bg-[#172033] px-6 py-5 text-white">
            <GraduationCap className="shrink-0 text-[#ffbd0e]" size={25} />
            <p className="text-sm leading-6 text-[#d9e4f2]"><strong className="text-white">Formación:</strong> Ingeniería de Sistemas, Universidad EAFIT (2022 - 2026) · Técnica en Desarrollo de Software, CESDE (2020 - 2022).</p>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-24 px-6 pb-24 pt-8 sm:pb-32">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#5180c2] px-6 py-14 text-center text-white sm:px-14 sm:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase"><BriefcaseBusiness size={14} /> Contacto</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">Contacto</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#edf4ff]">Estoy abierto a conversar sobre oportunidades y proyectos de software.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${profile.email}`} variant="secondary" className="border-white bg-white text-[#315784] hover:bg-[#edf4ff]">Escríbeme <Mail size={16} /></Button>
              <Button href={profile.linkedin} variant="light">LinkedIn <Link size={16} /></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7edf5] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs font-bold text-[#758194] sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Jhonnathan Ocampo.</p>
          <a href="#inicio" className="inline-flex items-center gap-1 transition hover:text-[#5180c2]">Volver arriba <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  )
}

function InfoCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return <article className="surface p-6"><div className={`mb-6 grid size-11 place-items-center rounded-xl ${color}`}>{icon}</div><h3 className="font-display text-xl font-bold tracking-[-0.04em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#566274]">{description}</p></article>
}

function ProjectCard({ title, subtitle, description, impact, tags, link, demo, color, accent }: (typeof projects)[number]) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#e7edf5] bg-white shadow-[0_14px_46px_rgba(30,58,96,0.06)]">
      <div className={`${color} relative min-h-48 overflow-hidden p-7`}>
        <div className={`absolute -right-6 -top-10 size-40 rounded-full ${accent} opacity-20`} />
        <div className={`absolute -bottom-10 left-8 size-28 rounded-full border-[18px] ${accent.replace('bg-', 'border-')} opacity-30`} />
        <div className="relative flex h-full flex-col justify-between">
          <span className="w-fit rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#172033]">Proyecto</span>
          <div><p className="font-display text-3xl font-bold tracking-[-0.05em] text-[#101827]">{title}</p><p className="mt-1 text-sm font-bold text-[#4e5a6c]">{subtitle}</p></div>
        </div>
      </div>
      <div className="p-7"><p className="text-sm leading-6 text-[#4e5a6c]">{description}</p><p className="mt-4 border-l-2 border-[#5180c2] pl-3 text-sm font-semibold leading-6 text-[#172033]">{impact}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-md bg-[#f3f6fa] px-2.5 py-1 text-xs font-bold text-[#566274]">{tag}</span>)}</div>{(link || demo) && <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{link && <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#315784] transition group-hover:gap-3">Ver repositorio <ExternalLink size={15} /></a>}{demo && <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#21757d] transition hover:gap-3">Ver sitio <ArrowUpRight size={15} /></a>}</div>}</div>
    </article>
  )
}

function ExperienceCard({ period, role, company, description, detail, last }: (typeof experience)[number] & { last: boolean }) {
  return <article className="surface grid gap-5 p-6 sm:grid-cols-[170px_1fr] sm:p-8"><div><span className="inline-flex rounded-full bg-[#fff1cb] px-3 py-1.5 text-xs font-bold text-[#8a5a00]">{period}</span></div><div><h3 className="font-display text-xl font-bold tracking-[-0.04em]">{role}</h3><p className="mt-1 text-sm font-bold text-[#5180c2]">{company}</p><p className="mt-4 text-sm leading-6 text-[#4e5a6c]">{description}</p><p className="mt-3 text-sm leading-6 text-[#758194]">{detail}</p>{!last && <div className="mt-6 h-px bg-[#e7edf5] sm:hidden" />}</div></article>
}

export default App
