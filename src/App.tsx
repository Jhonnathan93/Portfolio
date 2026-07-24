import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Check,
  Download,
  ExternalLink,
  GitFork,
  GraduationCap,
  Languages,
  Link,
  Mail,
  Menu,
  Network,
  X,
} from 'lucide-react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaAws, FaDocker, FaJava, FaPython } from 'react-icons/fa6'
import {
  SiDjango,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { en } from './lang/en'
import { es, type LanguageContent, type Project } from './lang/es'

const profile = {
  name: 'Jhonnathan Ocampo',
  email: 'jhonnathanocampo118@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jhonnathan-ocampo',
  github: 'https://github.com/Jhonnathan93',
}

type TechnologyIcon = IconType | typeof Network

const technologyIcons: Record<string, TechnologyIcon> = {
  Python: FaPython,
  Java: FaJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Spring Boot': SiSpringboot,
  FastAPI: SiFastapi,
  Django: SiDjango,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Vue: SiVuedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  gRPC: Network,
  AWS: FaAws,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  'GitHub Actions': SiGithubactions,
  Git: SiGit,
  OpenAPI: SiOpenapiinitiative,
}

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

  return <a href={href} download={download} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 ${styles} ${className}`}>{children}</a>
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{children && <div className="mt-5 text-base leading-7 text-[#566274]">{children}</div>}</div>
}

function Header({ content, onToggleLanguage }: { content: LanguageContent; onToggleLanguage: () => void }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#sobre-mi', label: content.navigation.profile },
    { href: '#proyectos', label: content.navigation.projects },
    { href: '#experiencia', label: content.navigation.experience },
    { href: '#contacto', label: content.navigation.contact },
  ]
  const languageLabel = content.code === 'es' ? 'EN' : 'ES'

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(30,58,96,0.06)] backdrop-blur-md sm:px-5">
        <a href="#inicio" className="font-display text-lg font-bold tracking-[-0.04em] text-[#101827]">Jhonnathan<span className="text-[#5180c2]">.</span></a>
        <nav className="hidden items-center rounded-full bg-[#f4f6f8] p-1 md:flex" aria-label={content.accessibility.primaryNavigation}>
          {links.map((link) => <a key={link.href} href={link.href} className="rounded-full px-3 py-1.5 text-xs font-bold text-[#4e5a6c] transition hover:bg-white hover:text-[#172033]">{link.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageButton label={languageLabel} ariaLabel={content.languageSwitch} onClick={onToggleLanguage} />
          <a className="text-[#172033] transition hover:text-[#5180c2]" href={profile.github} target="_blank" rel="noreferrer" aria-label={content.accessibility.github}><GitFork size={18} /></a>
          <a className="text-[#172033] transition hover:text-[#5180c2]" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={content.accessibility.linkedin}><Link size={18} /></a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageButton label={languageLabel} ariaLabel={content.languageSwitch} onClick={onToggleLanguage} />
          <button className="text-[#172033]" type="button" onClick={() => setOpen(!open)} aria-label={content.accessibility.menu}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {open && <nav className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white bg-white p-2 shadow-lg md:hidden" aria-label={content.accessibility.mobileNavigation}>{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#4e5a6c] hover:bg-[#f4f6f8]">{link.label}</a>)}</nav>}
    </header>
  )
}

function LanguageButton({ label, ariaLabel, onClick }: { label: string; ariaLabel: string; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-flex items-center gap-1 rounded-full border border-[#d9e4f2] bg-white px-2.5 py-1.5 text-xs font-bold text-[#315784] transition hover:bg-[#f7f9fc]"><Languages size={14} />{label}</button>
}

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const content = language === 'es' ? es : en
  const toggleLanguage = () => setLanguage((current) => current === 'es' ? 'en' : 'es')

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-[#d9e4f2]/65 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[34rem] size-96 rounded-full bg-[#fff1cb]/65 blur-3xl" />
      <Header content={content} onToggleLanguage={toggleLanguage} />
      <main>
        <section id="inicio" className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-6 pb-20 pt-16 sm:pt-8">
          <div className="w-full max-w-3xl">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-[#101827] sm:text-7xl">{profile.name}</h1>
            <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-[#172033] sm:text-3xl">{content.hero.role}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4e5a6c]">{content.hero.description}</p>
            <p className="mt-6 font-display text-base font-bold tracking-[-0.02em] text-[#315784]">Python <span className="mx-1 text-[#9eb8dd]">•</span> Java <span className="mx-1 text-[#9eb8dd]">•</span> Spring Boot <span className="mx-1 text-[#9eb8dd]">•</span> FastAPI <span className="mx-1 text-[#9eb8dd]">•</span> AWS</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#proyectos">{content.hero.viewProjects} <ArrowDown size={16} /></Button>
              <Button href="/Jhonnathan-Ocampo-CV.pdf" variant="secondary" download>{content.hero.downloadCv} <Download size={16} /></Button>
              <Button href={`mailto:${profile.email}`} variant="secondary">{content.hero.getInTouch} <Mail size={16} /></Button>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9e4f2] bg-white px-4 py-3 text-sm font-bold text-[#172033] transition hover:bg-[#f7f9fc]">{content.hero.github} <ArrowUpRight size={16} /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5 text-sm font-bold">
              {[content.hero.backendFocus, content.hero.nativeSpanish, content.hero.englishB2, content.hero.location].map((item) => <span key={item} className="rounded-full border border-[#d9e4f2] bg-white px-4 py-2 text-[#566274]">{item}</span>)}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="relative scroll-mt-28 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow={content.profile.eyebrow} title={content.profile.title}>{content.profile.description}</SectionIntro>
          <div className="mx-auto mt-14 max-w-6xl rounded-3xl border border-[#e7edf5] bg-white p-5 sm:p-8">
            <p className="mb-5 font-display text-lg font-bold tracking-[-0.03em]">{content.profile.technologiesTitle}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {content.technologies.map((label) => <TechnologyCard key={label} label={label} icon={technologyIcons[label] ?? Network} />)}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-24 bg-white/60 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow={content.projectsSection.eyebrow} title={content.code === 'es' ? 'Ingeniería aplicada.' : 'Applied engineering.'}>{content.code === 'es' ? 'Sistemas diseñados con foco en calidad, arquitectura, resiliencia y despliegue reproducible.' : 'Systems designed with a focus on quality, architecture, resilience, and reproducible delivery.'}</SectionIntro>
          <FeaturedProject language={content.code} project={content.projects[0]} labels={content.projectsSection} />
          <div className="mx-auto mt-20 max-w-6xl"><p className="eyebrow">{content.code === 'es' ? 'Más proyectos' : 'More projects'}</p><h3 className="font-display text-3xl font-bold tracking-[-0.045em] text-[#101827]">{content.code === 'es' ? 'Sistemas, plataformas y experimentos.' : 'Systems, platforms, and experiments.'}</h3><div className="mt-8 grid gap-6 lg:grid-cols-2">{content.projects.slice(1).filter((project) => !['Sistema Multiagente', 'Multi-agent System', 'InsightIQ', 'English News Summarization'].includes(project.title)).map((project) => <ProjectCard key={project.title} project={project} labels={content.projectsSection} />)}</div></div>
          <AiProjects language={content.code} projects={content.projects} labels={content.projectsSection} />
        </section>

        <section id="experiencia" className="scroll-mt-24 px-6 py-24 sm:py-32">
          <SectionIntro eyebrow={content.experienceSection.eyebrow} title={content.experienceSection.title}>{content.experienceSection.description}</SectionIntro>
          <div className="mx-auto mt-14 max-w-4xl space-y-5">{content.experience.map((item, index) => <ExperienceCard key={item.company} {...item} last={index === content.experience.length - 1} />)}</div>
          <div className="mx-auto mt-10 flex max-w-4xl items-center gap-4 rounded-2xl bg-[#172033] px-6 py-5 text-white"><GraduationCap className="shrink-0 text-[#ffbd0e]" size={25} /><p className="text-sm leading-6 text-[#d9e4f2]">{content.education}</p></div>
        </section>

        <section id="contacto" className="scroll-mt-24 px-6 pb-24 pt-8 sm:pb-32">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#5180c2] px-6 py-14 text-center text-white sm:px-14 sm:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-[0.12em] uppercase"><BriefcaseBusiness size={14} /> {content.contact.eyebrow}</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">{content.contact.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#edf4ff]">{content.contact.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Button href={`mailto:${profile.email}`} variant="secondary" className="border-white bg-white text-[#315784] hover:bg-[#edf4ff]">{content.contact.write} <Mail size={16} /></Button><Button href={profile.linkedin} variant="light">LinkedIn <Link size={16} /></Button></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#e7edf5] px-6 py-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs font-bold text-[#758194] sm:flex-row sm:text-left"><p>© {new Date().getFullYear()} Jhonnathan Ocampo. {content.footer.copyright}</p><a href="#inicio" className="inline-flex items-center gap-1 transition hover:text-[#5180c2]">{content.footer.backToTop} <ArrowUpRight size={14} /></a></div></footer>
    </div>
  )
}

function TechnologyCard({ icon: Icon, label }: { icon: TechnologyIcon; label: string }) {
  return <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-[#e7edf5] bg-[#f7f9fc] px-3 py-4 text-center transition hover:border-[#9eb8dd] hover:bg-white"><Icon size={28} className="text-[#172033]" aria-hidden="true" /><span className="text-xs font-bold text-[#3d4a5e]">{label}</span></div>
}

function FeaturedProject({ language, project, labels }: { language: 'es' | 'en'; project: Project; labels: LanguageContent['projectsSection'] }) {
  const es = language === 'es'
  const qualitySignals = es
    ? ['Ruff, mypy y validación de configuración', 'Semgrep, Gitleaks, pip-audit y Trivy', 'Cobertura de ramas ≥ 85 % y SonarCloud', 'Imagen no-root, health check y procedencia']
    : ['Ruff, mypy, and configuration validation', 'Semgrep, Gitleaks, pip-audit, and Trivy', '≥ 85% branch coverage and SonarCloud', 'Non-root image, health check, and provenance']

  return <article className="group mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-[#e7edf5] bg-white shadow-[0_14px_46px_rgba(30,58,96,0.06)]">
    <div className="grid lg:grid-cols-[1.05fr_.95fr]">
      <div className={`${project.color} relative overflow-hidden p-7 sm:p-10`}>
        <div className={`absolute -right-8 -top-12 size-48 rounded-full ${project.accent} opacity-20`} /><div className={`absolute -bottom-12 left-10 size-32 rounded-full ${project.accent} opacity-20`} />
        <div className="relative"><p className="eyebrow bg-white/80">{es ? 'Proyecto destacado' : 'Featured project'}</p>
        <h3 className="mt-4 font-display text-5xl font-bold tracking-[-0.06em] text-[#101827] sm:text-6xl">{project.title}</h3>
        <p className="mt-3 max-w-xl text-lg font-bold text-[#3d4a5e]">{es ? 'Plataforma de descubrimiento y recomendación de libros con IA, diseñada con calidad y entrega segura como requisitos de producto.' : 'AI-powered book discovery and recommendation platform, built with quality and secure delivery as product requirements.'}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[#4e5a6c]">{es ? 'Aísla las operaciones de escritura, consultas y proveedores externos para mantener el dominio testeable. Las integraciones con Google Books, LLMs y correo se prueban sin depender de servicios externos.' : 'It isolates write operations, queries, and external providers to keep the domain testable. Google Books, LLM, and email integrations are tested without relying on external services.'}</p>
        <div className="mt-7 flex flex-wrap gap-2">{['Layered architecture', 'CI/CD', 'SAST', 'Docker', 'LLM providers'].map((tag) => <span key={tag} className="rounded-md bg-white/70 px-2.5 py-1 text-xs font-bold text-[#566274]">{tag}</span>)}</div>
        <div className="mt-7 grid grid-cols-3 gap-2"><Metric value="76" label={es ? 'pruebas' : 'tests'} /><Metric value="85%" label={es ? 'cobertura mínima' : 'coverage gate'} /><Metric value="35" label={es ? 'rutas revisadas' : 'routes reviewed'} /></div>
        <div className="mt-8 flex flex-wrap gap-5"><a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#315784] hover:gap-3">{labels.repository} <ExternalLink size={15} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#21757d] hover:gap-3">{labels.site} <ArrowUpRight size={15} /></a>}</div></div>
      </div>
      <div className="bg-[#edf4ff] p-7 text-[#172033] sm:p-10">
        <p className="text-xs font-bold tracking-[0.12em] text-[#315784] uppercase">{es ? 'Arquitectura' : 'Architecture'}</p>
        <div className="mt-5 space-y-2 text-center text-xs font-bold"><ArchitectureNode icon={<Network size={17} />} label={es ? 'Cliente web' : 'Web client'} /><ArchitectureArrow /><ArchitectureNode icon={<Boxes size={17} />} label="Django · views / services / selectors" /><ArchitectureArrow /><div className="grid grid-cols-2 gap-2"><ArchitectureNode icon={<Network size={17} />} label="PostgreSQL" /><ArchitectureNode icon={<Network size={17} />} label="Google Books + LLM" /></div></div>
        <div className="mt-8 border-t border-[#d9e4f2] pt-6"><p className="text-xs font-bold tracking-[0.12em] text-[#315784] uppercase">{es ? 'Calidad y entrega' : 'Quality & delivery'}</p><ul className="mt-4 space-y-3">{qualitySignals.map((signal) => <li key={signal} className="flex gap-2 text-sm font-semibold leading-5 text-[#3d4a5e]"><Check className="mt-0.5 shrink-0 text-[#21757d]" size={16} />{signal}</li>)}</ul></div>
        <div className="mt-7 border-t border-[#d9e4f2] pt-6"><p className="text-xs font-bold tracking-[0.12em] text-[#315784] uppercase">{es ? 'Decisiones técnicas' : 'Technical decisions'}</p><div className="mt-4 space-y-3 text-sm leading-5 text-[#3d4a5e]"><p><strong className="text-[#172033]">{es ? 'Capas explícitas.' : 'Explicit layers.'}</strong> {es ? 'Las views gestionan HTTP; services concentran escrituras transaccionales y selectors las lecturas.' : 'Views handle HTTP; services centralize transactional writes and selectors own reads.'}</p><p><strong className="text-[#172033]">{es ? 'Pruebas aisladas.' : 'Isolated tests.'}</strong> {es ? 'La configuración de prueba evita credenciales y usa backends temporales para correo, media y dependencias externas.' : 'Test settings avoid credentials and use temporary backends for email, media, and external dependencies.'}</p><p><strong className="text-[#172033]">{es ? 'Entrega verificable.' : 'Verifiable delivery.'}</strong> {es ? 'El pipeline bloquea la publicación si fallan seguridad, calidad, cobertura o la comprobación de salud del contenedor.' : 'The pipeline blocks publication if security, quality, coverage, or container health checks fail.'}</p></div></div>
      </div>
    </div>
  </article>
}

function ArchitectureNode({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <div className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d9e4f2] bg-white px-3 py-2 text-[#315784] shadow-sm">{icon}<span>{label}</span></div>
}

function ArchitectureArrow() {
  return <div className="flex h-4 items-center justify-center text-[#5180c2]">↓</div>
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-white/70 bg-white/45 px-2 py-3 text-center"><p className="font-display text-2xl font-bold text-[#315784]">{value}</p><p className="mt-1 text-[10px] font-bold leading-3 text-[#566274]">{label}</p></div>
}

function AiProjects({ language, projects, labels }: { language: 'es' | 'en'; projects: Project[]; labels: LanguageContent['projectsSection'] }) {
  const aiProjects = projects.filter((project) => ['Sistema Multiagente', 'Multi-agent System', 'InsightIQ', 'English News Summarization'].includes(project.title))
  return <div className="mx-auto mt-20 max-w-6xl"><p className="eyebrow">AI Projects</p><h3 className="font-display text-3xl font-bold tracking-[-0.045em] text-[#101827]">{language === 'es' ? 'IA aplicada a productos y flujos de trabajo.' : 'AI applied to products and workflows.'}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-[#566274]">{language === 'es' ? 'Recomendaciones con proveedores LLM, automatización con agentes especializados y análisis asistido de datos.' : 'Recommendations with LLM providers, automation with specialized agents, and assisted data analysis.'}</p><div className="mt-8 grid gap-6 lg:grid-cols-3">{aiProjects.map((project) => <ProjectCard key={project.title} project={project} labels={labels} />)}</div></div>
}

function ProjectCard({ project, labels }: { project: Project; labels: LanguageContent['projectsSection'] }) {
  const { title, subtitle, description, impact, tags, link, demo, color, accent } = project
  return <article className="group overflow-hidden rounded-3xl border border-[#e7edf5] bg-white shadow-[0_14px_46px_rgba(30,58,96,0.06)]"><div className={`${color} relative min-h-48 overflow-hidden p-7`}><div className={`absolute -right-6 -top-10 size-40 rounded-full ${accent} opacity-20`} /><div className={`absolute -bottom-10 left-8 size-28 rounded-full ${accent} opacity-20`} /><div className="relative flex h-full flex-col justify-between"><span className="w-fit rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#172033]">{labels.label}</span><div><p className="font-display text-3xl font-bold tracking-[-0.05em] text-[#101827]">{title}</p><p className="mt-1 text-sm font-bold text-[#4e5a6c]">{subtitle}</p></div></div></div><div className="p-7"><p className="text-sm leading-6 text-[#4e5a6c]">{description}</p><p className="mt-4 border-l-2 border-[#5180c2] pl-3 text-sm font-semibold leading-6 text-[#172033]">{impact}</p><div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-md bg-[#f3f6fa] px-2.5 py-1 text-xs font-bold text-[#566274]">{tag}</span>)}</div>{(link || demo) && <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{link && <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#315784] transition group-hover:gap-3">{labels.repository} <ExternalLink size={15} /></a>}{demo && <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#21757d] transition hover:gap-3">{labels.site} <ArrowUpRight size={15} /></a>}</div>}</div></article>
}

function ExperienceCard({ period, role, company, description, detail, last }: LanguageContent['experience'][number] & { last: boolean }) {
  return <article className="surface grid gap-5 p-6 sm:grid-cols-[170px_1fr] sm:p-8"><div><span className="inline-flex rounded-full bg-[#fff1cb] px-3 py-1.5 text-xs font-bold text-[#8a5a00]">{period}</span></div><div><h3 className="font-display text-xl font-bold tracking-[-0.04em]">{role}</h3><p className="mt-1 text-sm font-bold text-[#5180c2]">{company}</p><p className="mt-4 text-sm leading-6 text-[#4e5a6c]">{description}</p><p className="mt-3 text-sm leading-6 text-[#758194]">{detail}</p>{!last && <div className="mt-6 h-px bg-[#e7edf5] sm:hidden" />}</div></article>
}

export default App
