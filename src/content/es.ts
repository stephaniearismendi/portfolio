import type { Content } from './types'

export const es: Content = {
  meta: {
    name: 'Stephanie Arismendi',
    role: 'Desarrolladora Backend',
  },
  nav: [
    { id: 'about', label: 'Sobre mi' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Stack' },
    { id: 'contact', label: 'Contacto' },
  ],
  hero: {
    greeting: 'Hola, soy Stephanie',
    intro:
      'Desarrolladora backend con 3+ anos construyendo microservicios, sistemas event-driven y APIs. En Madrid, disponible en remoto.',
    cta: 'Contactar',
    ctaSecondary: 'Ver mi trabajo',
  },
  about: {
    title: 'Sobre mi',
    body: [
      'De dia trabajo en servicios backend con Java, Spring Boot y Kafka. Esa es mi experiencia principal de momento.',
      'Por mi cuenta me gusta hacer scripts, automatizaciones y herramientas pequenas - cosas que ahorran tiempo o resuelven un problema concreto. Abierta a remoto y a proyectos freelance de ese tipo.',
    ],
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Getnet Platforms',
        role: 'Software Engineer Analyst',
        period: 'Sep 2024 - Actualidad',
        location: 'Madrid - Hibrido',
        description:
          'Apoyo en el desarrollo y mantenimiento de microservicios event-driven para procesamiento de pagos online. Trabajo diario con Kafka para streaming de eventos en tiempo real y brokering de mensajes entre servicios de pago. Mantenimiento y optimizacion de indices de Elasticsearch para consultas y agregaciones rapidas. Apoyo en el diseno y despliegue de microservicios con Java y Spring Boot. Implementacion y ejecucion de tests end-to-end (E2E) con Node.js.',
        stack: ['Java', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Kubernetes', 'Concourse CI', 'GitHub Actions', 'Node.js'],
      },
      {
        company: 'Plexus Tech',
        role: 'Junior Backend Developer',
        period: 'Ago 2023 - Sep 2024',
        location: 'Madrid - Remoto',
        description: 'Trabajando con Getnet Platforms (empresa de Santander). Desarrollo backend, testing de integracion, testing de rendimiento con Gatling. Construccion y mantenimiento de microservicios.',
        stack: ['Java', 'Spring', 'Kafka', 'Elasticsearch', 'Kibana', 'Gatling', 'Git'],
      },
      {
        company: 'BBVA Asset Management',
        role: 'Data & Digital Strategy Intern',
        period: 'Feb 2023 - Jul 2023',
        location: 'Madrid - Hibrido',
        description:
          'Apoyo en proyectos, mantenimiento y mejora de los ya finalizados. Carga diaria de datos de fondos de inversion en SAS. Mantenimiento y extraccion de datos del catalogo AM-Product. Migracion de procesos SAS a Python en la plataforma DATIO. Diseno y desarrollo de cuadros de mando de BI en MicroStrategy.',
        stack: ['Python', 'PySpark', 'SAS', 'MicroStrategy', 'Markit EDM'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Proyectos personales y experimentos',
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
        title: 'Datos y Mensajeria',
        items: ['Apache Kafka', 'Kafka Streams', 'Confluent', 'Elasticsearch', 'Kibana', 'PostgreSQL'],
      },
      {
        title: 'DevOps e Infraestructura',
        items: ['Kubernetes', 'PCF', 'Docker', 'Concourse CI', 'GitHub Actions', 'Git'],
      },
      {
        title: 'Testing y Herramientas',
        items: ['Gatling', 'Testing E2E', 'Testing de Integracion', 'JIRA', 'Scrum'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    text: 'Abierta a roles remotos y freelance - scripts, automatizaciones, APIs, backend. Escribeme.',
    cta: 'Enviar email',
  },
  footer: {
    note: 'Hecho con React + TypeScript',
  },
  language: {
    switchTo: 'EN',
    aria: 'Cambiar a ingles',
  },
}
