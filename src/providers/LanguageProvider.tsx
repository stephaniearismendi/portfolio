import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_LOCALE,
  getContent,
  toggleLocale,
  type Content,
  type Locale,
} from '@/content'

const STORAGE_KEY = 'portfolio-locale'

type LanguageContextValue = {
  locale: Locale
  content: Content
  switchLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const readStoredLocale = (): Locale => {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'es' || stored === 'en' ? stored : DEFAULT_LOCALE
}

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    setLocale(readStoredLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const switchLanguage = useCallback(() => {
    setLocale((current) => toggleLocale(current))
  }, [])

  const value = useMemo(
    () => ({
      locale,
      content: getContent(locale),
      switchLanguage,
    }),
    [locale, switchLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
