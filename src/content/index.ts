import { en } from './en'
import { es } from './es'
import type { Content, Locale } from './types'

export type { Content, Locale, Job, Project, SkillGroup, NavItem } from './types'

const dictionary: Record<Locale, Content> = { en, es }

export const DEFAULT_LOCALE: Locale = 'en'

export const getContent = (locale: Locale): Content => dictionary[locale]

export const toggleLocale = (locale: Locale): Locale =>
  locale === 'en' ? 'es' : 'en'
