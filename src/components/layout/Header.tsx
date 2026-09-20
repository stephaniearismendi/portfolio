import { useEffect, useState } from 'react'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Header.module.css'

export function Header() {
  const { content } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.name}>{content.meta.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
