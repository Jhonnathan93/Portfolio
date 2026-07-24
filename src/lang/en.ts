import type { LanguageContent } from './es'

export const en: LanguageContent = {
  code: 'en',
  navigation: { profile: 'Technical profile', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
  hero: {
    eyebrow: 'Software engineer', role: 'Software Engineer',
    description: 'Building scalable backend systems, cloud-native applications, and AI-powered software.',
    viewProjects: 'View projects', downloadCv: 'Download CV', getInTouch: 'Get in touch', github: 'GitHub',
    backendFocus: 'Backend focus', nativeSpanish: 'Native Spanish', englishB2: 'English B2', location: 'Medellín, Colombia',
  },
  profile: {
    eyebrow: 'Professional profile', title: 'Backend software engineering.',
    description: 'EAFIT · Python · Java · Cloud · AWS · Microservices. I design distributed systems, APIs, and delivery pipelines with a focus on quality, security, and maintainability.',
    technologiesTitle: 'Tech Stack',
  },
  technologies: ['Python', 'Java', 'TypeScript', 'JavaScript', 'Spring Boot', 'Django', 'FastAPI', 'Next.js', 'Vue', 'React', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'RabbitMQ', 'gRPC', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Git', 'REST API', 'OpenAPI', 'OAuth', 'JWT'],
  projectsSection: { eyebrow: 'Projects', title: 'Academic and personal projects.', description: 'Web applications, distributed systems, automation, data, and artificial intelligence projects.', label: 'Project', repository: 'View repository', site: 'View site' },
  projects: [
    { title: 'BookNexus', subtitle: 'AI-powered book recommendations', description: 'Django platform that integrates LLMs and the Google Books API to discover books intelligently.', impact: 'Layered architecture, authentication, reading lists, and reports.', tags: ['Django', 'LLMs', 'Docker', 'GitHub Actions'], link: 'https://github.com/Jhonnathan93/integrating-project-1', demo: 'https://integrating-project-1.vercel.app/book/', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
    { title: 'Bike Network System', subtitle: 'Cloud-native distributed platform', description: 'Bike management system designed with decoupled services and asynchronous communication.', impact: 'REST APIs, JWT, RabbitMQ, Kubernetes, and AWS deployment.', tags: ['Microservices', 'RabbitMQ', 'Kubernetes', 'AWS'], link: 'https://github.com/Jhonnathan93/Bike-Network-System', color: 'bg-[#e0eff0]', accent: 'bg-[#32919a]' },
    { title: 'Safe Route', subtitle: 'Safety-prioritized pedestrian routes', description: 'Web application to explore routes in Medellín by balancing distance and an estimated street-harassment risk.', impact: 'Dijkstra, pedestrian graph, Django REST, React, Leaflet, and an API with validated contracts.', tags: ['Django REST', 'React', 'TypeScript', 'Docker'], link: 'https://github.com/Jhonnathan93/Safe-route', demo: 'https://safe-route-sepia.vercel.app/', color: 'bg-[#fff1cb]', accent: 'bg-[#ffbd0e]' },
    { title: 'Garden of Eden', subtitle: 'Plant store and care guides', description: 'E-commerce platform to browse plants, learn about their care, and complete purchases through a full catalog.', impact: 'Catalog, authentication, cart, orders, reviews, admin panel, and downloadable reports.', tags: ['Laravel', 'MySQL', 'Docker', 'Supabase'], link: 'https://github.com/Jhonnathan93/PlantShop', demo: 'https://plant-shop-sigma-lake.vercel.app/', color: 'bg-[#f4f5da]', accent: 'bg-[#b3b604]' },
    { title: 'Multi-agent System', subtitle: 'AI-assisted architecture pipeline', description: 'System that turns a brief into architecture artifacts through six specialized agents and human review.', impact: 'Artifact versioning, execution logs, approval or rejection, and n8n-orchestrated flows.', tags: ['FastAPI', 'Vue', 'n8n', 'PostgreSQL'], link: 'https://github.com/Jhonnathan93/Multi-agent-challenge', color: 'bg-[#e9e9f4]', accent: 'bg-[#9999e5]' },
    { title: 'Parallelism in a Controlled Environment', subtitle: 'Concurrency analysis with CSV files', description: 'Comparison of sequential, single-core, and multicore CSV processing in C and Python implementations.', impact: 'Measures execution time and memory use with blocks that simulate paged memory management.', tags: ['C', 'Python', 'Parallelism', 'CSV'], link: 'https://github.com/Jhonnathan93/Parallelism-in-a-Controlled-Environment', color: 'bg-[#f4d3d0]', accent: 'bg-[#ff6a51]' },
    { title: 'RPC + MOM Communication System', subtitle: 'Fault-tolerant microservices', description: 'Distributed e-commerce system that combines RPC as the primary channel and messaging as a fallback during failures.', impact: 'API Gateway, gRPC, RabbitMQ, WebSockets, MongoDB, Docker Swarm, and Grafana monitoring.', tags: ['FastAPI', 'gRPC', 'RabbitMQ', 'Docker Swarm'], link: 'https://github.com/alejoriosm04/rpc-mom-comm', color: 'bg-[#e0eff0]', accent: 'bg-[#32919a]' },
    { title: 'InsightIQ', subtitle: 'Data analysis with AI agents', description: 'Application to analyze, monitor, and extract insights from structured data through language models.', impact: 'FastAPI backend, React frontend, and persistence managed with SQLAlchemy and Alembic.', tags: ['FastAPI', 'React', 'LLMs', 'Alembic'], link: 'https://github.com/Jhonnathan93/InsightIQ', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
    { title: 'Numerical Analysis Calculator', subtitle: 'Numerical methods calculator', description: 'Web application for solving linear and nonlinear equation systems, as well as interpolation methods.', impact: 'Implements numerical methods and returns results, iterations, function values, and absolute error.', tags: ['Python', 'Django', 'Numerical analysis', 'Interpolation'], link: 'https://github.com/Jhonnathan93/numerical-analysis-calculator', demo: 'https://numerical-analysis-calculator.vercel.app/', color: 'bg-[#f8ffd9]', accent: 'bg-[#e2ff58]' },
    { title: 'English News Summarization', subtitle: 'News summarization with LSTM and attention', description: 'Educational notebook that trains a sequence-to-sequence model to summarize English CNN/DailyMail news articles.', impact: 'Attention-based LSTM encoder-decoder, spaCy embeddings, greedy decoding, and beam search.', tags: ['Python', 'TensorFlow', 'Keras', 'NLP'], link: 'https://github.com/Jhonnathan93/Applied-ML', color: 'bg-[#d9e4f2]', accent: 'bg-[#5180c2]' },
  ],
  experienceSection: { eyebrow: 'Experience', title: 'Professional experience.', description: 'Software development, process automation, and Agile team collaboration.' },
  experience: [
    { period: 'Jul 2025 - Jan 2026', role: 'Software Engineering Intern', company: 'ISA Energía Colombia', description: 'Automated the ingestion of technical-object data into SAP through an internal application, reducing manual processing time by 88.9%.', detail: 'Designed ETL pipelines to clean, transform, and visualize data supporting maintenance decisions for Colombia’s power transmission network.' },
    { period: 'Jul 2024 - Jun 2025', role: 'Junior Software Developer', company: 'Universidad EAFIT', description: 'Built full-stack features for urban-analysis systems: REST APIs, web interfaces, and containerized deployments.', detail: 'Collaborated in a Scrum team using Git, Docker, and CI/CD to improve application quality, availability, and maintainability.' },
  ],
  education: 'Education: Systems Engineering, Universidad EAFIT (2022 - 2026) · Software Development Technician, CESDE (2020 - 2022).',
  contact: { eyebrow: 'Contact', title: 'Contact', description: 'I am open to discussing opportunities and software projects.', write: 'Write to me' },
  footer: { copyright: 'All rights reserved.', backToTop: 'Back to top' },
  languageSwitch: 'Switch language to Spanish',
  accessibility: { primaryNavigation: 'Primary navigation', mobileNavigation: 'Mobile navigation', github: 'Jhonnathan’s GitHub', linkedin: 'Jhonnathan’s LinkedIn', menu: 'Open menu' },
}
