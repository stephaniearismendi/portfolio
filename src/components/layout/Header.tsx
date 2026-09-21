import { useEffect, useState } from 'react'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Header.module.css'

export function Header() {
  const { content } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand}>
          {content.meta.name}
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageToggle />
      </div>
    </header>
  )
}
