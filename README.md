# Portafolio de Jhonnathan Ocampo

<p align="center">
  Portafolio personal de Jhonnathan Ocampo, Ingeniero de Software Backend, con experiencia, tecnologías y proyectos seleccionados.
</p>

## Tabla de contenido

- [Acerca del proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Comandos](#comandos)
- [Arquitectura](#arquitectura)
- [Calidad](#calidad)
- [Build y despliegue](#build-y-despliegue)
- [CI/CD](#cicd)
- [Contribuciones](#contribuciones)
- [Ramas](#ramas)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Recursos](#recursos)
- [Galería](#galería)
- [Licencia](#licencia)

## Acerca del proyecto

Este repositorio contiene un portafolio estático y responsive para presentar el perfil profesional, experiencia, tecnologías y proyectos de Jhonnathan Ocampo.

La aplicación está pensada para reclutadores, equipos técnicos y personas interesadas en revisar proyectos de backend, sistemas distribuidos, cloud, automatización e inteligencia artificial. No requiere backend, base de datos ni variables de entorno para ejecutarse.

## Características

- Secciones de perfil, experiencia profesional, tecnologías, proyectos y contacto.
- Enlaces a repositorios de GitHub, demos desplegadas, LinkedIn y correo electrónico.
- Diseño responsive para escritorio y dispositivos móviles.
- Tipografías Stack Sans Text para títulos y Quicksand para texto.
- Datos de contenido centralizados en componentes reutilizables.

## Tecnologías

- React 19 y TypeScript.
- Vite 8.
- Tailwind CSS 4.
- Lucide React para iconografía.
- Google Fonts: Stack Sans Text y Quicksand.

## Requisitos previos

- Node.js 20 o superior.
- npm 10 o superior.

No se necesitan credenciales, servicios externos ni base de datos para desarrollo local.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/Jhonnathan93/portfolio.git
cd portfolio
```

Instala las dependencias:

```bash
npm install
```

En Windows, si PowerShell bloquea el script de npm, usa `npm.cmd`:

```powershell
npm.cmd install
```

## Comandos

| Objetivo | Comando |
| --- | --- |
| Iniciar en desarrollo | `npm run dev` |
| Crear build de producción | `npm run build` |
| Previsualizar el build | `npm run preview` |

En PowerShell con la ejecución de scripts deshabilitada, reemplaza `npm` por `npm.cmd`.

## Arquitectura

La aplicación es una SPA estática. El contenido, los enlaces y las tarjetas de proyectos se definen en el componente principal; los elementos de interfaz se reutilizan mediante componentes como `Button`, `InfoCard`, `ProjectCard` y `ExperienceCard`.

```text
src/
  App.tsx          Contenido, secciones y componentes reutilizables
  index.css        Tema, tipografías y estilos globales de Tailwind
  main.tsx         Punto de entrada de React
  vite-env.d.ts    Tipos de Vite
index.html         Documento base y carga de fuentes
vite.config.ts     Configuración de Vite, React y Tailwind
```

| Componente | Responsabilidad |
| --- | --- |
| `App` | Organiza las secciones del portafolio y sus datos. |
| `Header` | Navegación principal responsive y enlaces sociales. |
| `ProjectCard` | Presenta repositorio, tecnologías y demo de un proyecto. |
| `Button` | Botones de enlace con variantes visuales reutilizables. |

## Calidad

El comando de build ejecuta la comprobación de tipos de TypeScript y genera el bundle de Vite:

```bash
npm run build
```

El proyecto no tiene una suite de pruebas, cobertura, linter o pipeline de CI configurados actualmente.

## Build y despliegue

Genera el artefacto estático de producción:

```bash
npm run build
```

El resultado se crea en `dist/`. Para desplegar en Vercel:

1. Sube el repositorio a GitHub.
2. Importa el repositorio desde Vercel.
3. Vercel detectará Vite automáticamente.
4. Usa `npm run build` como comando de build y `dist` como directorio de salida si Vercel no los detecta.

No se requieren variables de entorno para el despliegue.

## CI/CD

No hay un flujo de CI/CD configurado en este repositorio. Como verificación mínima antes de publicar cambios, ejecuta:

```bash
npm run build
```

## Contribuciones

Las contribuciones son bienvenidas.

1. Crea una rama enfocada en un cambio.
2. Mantén el contenido profesional y verifica enlaces externos.
3. Ejecuta `npm run build`.
4. Abre un pull request con una descripción clara del cambio.

## Ramas

- `main`: rama principal del proyecto.
- `feat/<tema>`, `fix/<tema>` y `chore/<tema>`: ramas cortas para cambios específicos.

No hay una política de protección o estrategia de merge configurada en el repositorio actualmente.

## Preguntas frecuentes

### ¿Necesito una base de datos?

No. El contenido del portafolio se define de forma estática en `src/App.tsx`.

### ¿Dónde agrego un proyecto nuevo?

Agrega un objeto al arreglo `projects` en `src/App.tsx`. Incluye título, descripción, tecnologías, enlace al repositorio y, si existe, una URL de demo.

### ¿Cómo cambio los datos de contacto?

Actualiza el objeto `profile` en `src/App.tsx`.

## Recursos

- [Repositorio del portafolio](https://github.com/Jhonnathan93/portfolio)
- [Perfil de GitHub](https://github.com/Jhonnathan93)
- [Perfil de LinkedIn](https://www.linkedin.com/in/jhonnathan-ocampo)
- [Documentación de Vite](https://vite.dev/guide/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

## Galería

No hay capturas mantenidas en el repositorio. Las demos de los proyectos se enlazan desde la sección de proyectos del portafolio.

## Licencia

Este repositorio no incluye un archivo de licencia. No se conceden permisos de reutilización de forma implícita.
