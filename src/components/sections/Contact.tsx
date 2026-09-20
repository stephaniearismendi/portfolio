import { AnchorButton } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/config/site'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Contact.module.css'

export function Contact() {
  const { content } = useLanguage()

  return (
    <Section id="contact" title={content.contact.title} layout="split">
      <div className={styles.block}>
        <p className={styles.text}>{content.contact.text}</p>
        <div className={styles.actions}>
          <AnchorButton href={`mailto:${SITE.email}`}>
            {content.contact.cta}
          </AnchorButton>
          <AnchorButton href={SITE.linkedin} variant="ghost" external>
            LinkedIn
          </AnchorButton>
          <AnchorButton href={SITE.github} variant="ghost" external>
            GitHub
          </AnchorButton>
        </div>
      </div>
    </Section>
  )
}
