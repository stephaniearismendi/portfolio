import type { Content } from './types'

export const es: Content = {
  meta: {
    name: 'Stephanie Arismendi',
    role: 'Desarrolladora Backend',
  },
  nav: [
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Stack' },
    { id: 'contact', label: 'Contacto' },
  ],
  hero: {
    greeting: 'Hola, soy Stephanie',
    intro:
      'Más de 3 años construyendo microservicios, APIs y sistemas event-driven. En Madrid — abierta a remoto y freelance.',
    cta: 'Contactar',
    ctaSecondary: 'Experiencia',
  },
  about: {
    title: 'Sobre mí',
    body: [
      'Trabajo como ingeniera backend en sistemas de producción con Java, Spring Boot y Kafka: microservicios, streaming, índices de búsqueda y las pruebas que los acompañan.',
      'Además hago scripts, automatizaciones y herramientas pequeñas cuando hace falta una solución práctica sin montar un equipo entero. Abierta a remoto y a proyectos freelance de ese tipo.',
    ],
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Getnet Platforms',
        role: 'Software Engineer Analyst',
        period: 'Sep 2024 — Actualidad',
        location: 'Madrid · Híbrido',
        description:
          'Apoyo en el desarrollo y mantenimiento de microservicios event-driven para procesamiento de pagos online. Trabajo diario con Kafka para streaming de eventos en tiempo real y brokering de mensajes entre servicios de pago. Mantenimiento y optimización de índices de Elasticsearch para consultas y agregaciones rápidas. Apoyo en el diseño y despliegue de microservicios con Java y Spring Boot. Implementación y ejecución de tests end-to-end (E2E) con Node.js.',
        stack: [
          'Java',
          'Spring Boot',
          'Kafka',
          'Elasticsearch',
          'Kubernetes',
          'Concourse CI',
          'GitHub Actions',
          'Node.js',
        ],
      },
      {
        company: 'Plexus Tech',
        role: 'Junior Backend Developer',
        period: 'Ago 2023 — Sep 2024',
        location: 'Madrid · Remoto',
        description:
          'Trabajando con Getnet Platforms (empresa de Santander). Desarrollo backend, testing de integración, testing de rendimiento con Gatling. Construcción y mantenimiento de microservicios.',
        stack: ['Java', 'Spring', 'Kafka', 'Elasticsearch', 'Kibana', 'Gatling', 'Git'],
      },
      {
        company: 'BBVA Asset Management',
        role: 'Data & Digital Strategy Intern',
        period: 'Feb 2023 — Jul 2023',
        location: 'Madrid · Híbrido',
        description:
          'Apoyo en proyectos, mantenimiento y mejora de los ya finalizados. Carga diaria de datos de fondos de inversión en SAS. Mantenimiento y extracción de datos del catálogo AM-Product. Migración de procesos SAS a Python en la plataforma DATIO. Diseño y desarrollo de cuadros de mando de BI en MicroStrategy.',
        stack: ['Python', 'PySpark', 'SAS', 'MicroStrategy', 'Markit EDM'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Trabajo personal y experimentos',
    items: [
      {
        name: 'Huchapp',
        description:
          'PWA de finanzas personales local-first: React/TypeScript + Vite, datos en IndexedDB (Dexie), import de extractos Excel y despliegue estático en Cloudflare. Privacidad por diseño — sin servidor de datos.',
        stack: [
          'React 19',
          'TypeScript',
          'Vite',
          'Tailwind 4',
          'Zustand',
          'Dexie',
          'i18next',
          'PWA',
          'ExcelJS',
          'Vitest',
        ],
        link: 'https://huchapp.stephaniearismendi17.workers.dev/',
        repo: 'https://github.com/stephaniearismendi/local-finance-tracker',
      },
    ],
  },
  skills: {
    title: 'Stack',
    groups: [
      {
        title: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Framework', 'Node.js', 'Python'],
      },
      {
        title: 'Datos y mensajería',
        items: [
          'Apache Kafka',
          'Kafka Streams',
          'Confluent',
          'Elasticsearch',
          'Kibana',
          'PostgreSQL',
        ],
      },
      {
        title: 'DevOps e infraestructura',
        items: ['Kubernetes', 'PCF', 'Docker', 'Concourse CI', 'GitHub Actions', 'Git'],
      },
      {
        title: 'Testing y herramientas',
        items: ['Gatling', 'Testing E2E', 'Testing de integración', 'JIRA', 'Scrum'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    text: 'Roles remotos, scripts freelance, automatizaciones, APIs — escríbeme.',
    cta: 'Email',
  },
  footer: {
    note: 'Hecho con React + TypeScript',
  },
  language: {
    switchTo: 'EN',
    aria: 'Cambiar a inglés',
  },
}
