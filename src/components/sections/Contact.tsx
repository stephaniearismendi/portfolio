import { AnchorButton } from '@/components/ui/Button'
import { GlassSurface } from '@/components/ui/GlassSurface'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/config/site'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Contact.module.css'

export function Contact() {
  const { content } = useLanguage()

  return (
    <Section id="contact" title={content.contact.title}>
      <GlassSurface className={styles.panel} strong>
        <p className={styles.text}>{content.contact.text}</p>
        <div className={styles.actions}>
          <AnchorButton href={`mailto:${SITE.email}`}>
            {content.contact.cta}
          </AnchorButton>
          <AnchorButton href={SITE.github} variant="ghost" external>
            GitHub
          </AnchorButton>
        </div>
      </GlassSurface>
    </Section>
  )
}
