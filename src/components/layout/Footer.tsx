import { SITE } from '@/config/site'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Footer.module.css'

export function Footer() {
  const { content } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {content.meta.name}
        </p>
        <div className={styles.links}>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={SITE.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={`mailto:${SITE.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
