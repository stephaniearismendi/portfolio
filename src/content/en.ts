import type { Content } from './types'

export const en: Content = {
  meta: {
    name: 'Stephanie Arismendi',
    role: 'Backend Developer',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: "Hey, I'm Stephanie",
    intro:
      '3+ years building microservices, APIs, and event-driven systems. Based in Madrid — open to remote roles and freelance work.',
    cta: 'Get in touch',
    ctaSecondary: 'Experience',
  },
  about: {
    title: 'About',
    body: [
      'I work as a backend engineer on production systems built with Java, Spring Boot, and Kafka — microservices, streaming, search indexes, and the tests around them.',
      'Alongside that, I build scripts, automations, and small tools when a problem needs a practical solution without spinning up a whole team. Happy to take remote or freelance work of that kind.',
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Getnet Platforms',
        role: 'Software Engineer Analyst',
        period: 'Sep 2024 — Present',
        location: 'Madrid · Hybrid',
        description:
          'Support in the development and maintenance of event-driven microservices for online payment processing. Daily work with Kafka for real-time event streaming and message brokering between payment services. Maintenance and optimization of Elasticsearch indexes for fast payment data querying and aggregation. Support in the design and deployment of microservices using Java and Spring Boot. Implementation and execution of end-to-end (E2E) tests using Node.js.',
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
        period: 'Aug 2023 — Sep 2024',
        location: 'Madrid · Remote',
        description:
          'Working with Getnet Platforms (a Santander company). Backend development, integration testing, performance testing with Gatling. Building and maintaining microservices.',
        stack: ['Java', 'Spring', 'Kafka', 'Elasticsearch', 'Kibana', 'Gatling', 'Git'],
      },
      {
        company: 'BBVA Asset Management',
        role: 'Data & Digital Strategy Intern',
        period: 'Feb 2023 — Jul 2023',
        location: 'Madrid · Hybrid',
        description:
          'Support in running projects, maintenance, and upgrade of those already finished. Daily investment funds data upload in SAS. Maintenance and requested extraction of data from AM-Product catalog database. Remaking SAS processes using Python into DATIO platform. Design and development of business intelligence scoreboards in MicroStrategy.',
        stack: ['Python', 'PySpark', 'SAS', 'MicroStrategy', 'Markit EDM'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Personal work and experiments',
    items: [
      {
        name: 'Huchapp',
        description:
          'Local-first personal finance PWA: React/TypeScript + Vite, data in IndexedDB (Dexie), Excel statement import, static deploy on Cloudflare. Privacy by design — no data server.',
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
        title: 'Data & Messaging',
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
        title: 'DevOps & Infrastructure',
        items: ['Kubernetes', 'PCF', 'Docker', 'Concourse CI', 'GitHub Actions', 'Git'],
      },
      {
        title: 'Testing & Tools',
        items: ['Gatling', 'E2E Testing', 'Integration Testing', 'JIRA', 'Scrum'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Remote roles, freelance scripts, automations, APIs — say hi.',
    cta: 'Email me',
  },
  footer: {
    note: 'Built with React + TypeScript',
  },
  language: {
    switchTo: 'ES',
    aria: 'Switch to Spanish',
  },
}
