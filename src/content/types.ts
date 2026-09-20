export type Locale = 'en' | 'es'

export type NavItem = {
  id: string
  label: string
}

export type Job = {
  company: string
  role: string
  period: string
  location: string
  description: string
  stack?: string[]
}

export type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Content = {
  meta: {
    name: string
    role: string
  }
  nav: NavItem[]
  hero: {
    greeting: string
    intro: string
    cta: string
    ctaSecondary: string
  }
  about: {
    title: string
    body: string[]
  }
  experience: {
    title: string
    jobs: Job[]
  }
  projects: {
    title: string
    subtitle: string
    items: Project[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contact: {
    title: string
    text: string
    cta: string
  }
  footer: {
    note: string
  }
  language: {
    switchTo: string
    aria: string
  }
}
