import { SITE } from '@/config/site'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Footer.module.css'

export function Footer() {
  const { content } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {content.meta.name}
        </p>
        <p className={styles.note}>{content.footer.note}</p>
        <a
          className={styles.link}
          href={SITE.github}
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
