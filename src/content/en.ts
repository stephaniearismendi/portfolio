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
      'Backend developer with 3+ years building microservices, event-driven systems, and APIs. Based in Madrid, open to remote.',
    cta: 'Get in touch',
    ctaSecondary: 'See my work',
  },
  about: {
    title: 'About me',
    body: [
      "By day I work on backend services with Java, Spring Boot, and Kafka. That's my main experience so far.",
      "On the side I'm into scripts, automations, and small tools - the kind of things that save people time or solve a specific problem. Open to remote work and freelance gigs around that.",
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Getnet Platforms',
        role: 'Software Engineer Analyst',
        period: 'Sep 2024 - Present',
        location: 'Madrid - Hybrid',
        description:
          'Support in the development and maintenance of event-driven microservices for online payment processing. Daily work with Kafka for real-time event streaming and message brokering between payment services. Maintenance and optimization of Elasticsearch indexes for fast payment data querying and aggregation. Support in the design and deployment of microservices using Java and Spring Boot. Implementation and execution of end-to-end (E2E) tests using Node.js.',
        stack: ['Java', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Kubernetes', 'Concourse CI', 'GitHub Actions', 'Node.js'],
      },
      {
        company: 'Plexus Tech',
        role: 'Junior Backend Developer',
        period: 'Aug 2023 - Sep 2024',
        location: 'Madrid - Remote',
        description: 'Working with Getnet Platforms (a Santander company). Backend development, integration testing, performance testing with Gatling. Building and maintaining microservices.',
        stack: ['Java', 'Spring', 'Kafka', 'Elasticsearch', 'Kibana', 'Gatling', 'Git'],
      },
      {
        company: 'BBVA Asset Management',
        role: 'Data & Digital Strategy Intern',
        period: 'Feb 2023 - Jul 2023',
        location: 'Madrid - Hybrid',
        description:
          'Support in running projects, maintenance, and upgrade of those already finished. Daily investment funds data upload in SAS. Maintenance and requested extraction of data from AM-Product catalog database. Remaking SAS processes using Python into DATIO platform. Design and development of business intelligence scoreboards in MicroStrategy.',
        stack: ['Python', 'PySpark', 'SAS', 'MicroStrategy', 'Markit EDM'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Side projects and experiments',
    items: [
      {
        name: 'Your project here',
        description: 'Add your personal projects - APIs, scripts, tools, automations.',
        stack: ['Tech', 'Stack', 'Here'],
        repo: 'https://github.com/stephaniearismendi',
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
        items: ['Apache Kafka', 'Kafka Streams', 'Confluent', 'Elasticsearch', 'Kibana', 'PostgreSQL'],
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
    title: 'Get in touch',
    text: 'Open to remote roles and freelance work - scripts, automations, APIs, backend stuff. Write me.',
    cta: 'Send email',
  },
  footer: {
    note: 'Built with React + TypeScript',
  },
  language: {
    switchTo: 'ES',
    aria: 'Switch to Spanish',
  },
}
