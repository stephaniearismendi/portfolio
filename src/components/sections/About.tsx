import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './About.module.css'

export function About() {
  const { content } = useLanguage()

  return (
    <Section id="about" title={content.about.title} layout="split">
      <div className={styles.body}>
        {content.about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
