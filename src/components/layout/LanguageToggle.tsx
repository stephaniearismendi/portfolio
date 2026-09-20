import { useLanguage } from '@/providers/LanguageProvider'
import styles from './LanguageToggle.module.css'

export function LanguageToggle() {
  const { content, switchLanguage } = useLanguage()

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={switchLanguage}
      aria-label={content.language.aria}
    >
      <span className={styles.label}>{content.language.switchTo}</span>
    </button>
  )
}
