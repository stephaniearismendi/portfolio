import { AnchorButton } from '@/components/ui/Button'
import { useLanguage } from '@/providers/LanguageProvider'
import { EventStreamVisual } from '@/components/sections/EventStreamVisual'
import styles from './Hero.module.css'

export function Hero() {
  const { content } = useLanguage()

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.visual} aria-hidden="true">
        <EventStreamVisual />
      </div>

      <div className={styles.copy}>
        <h1 className={styles.greeting}>{content.hero.greeting}</h1>
        <p className={styles.role}>{content.meta.role}</p>
        <p className={styles.intro}>{content.hero.intro}</p>
        <div className={styles.actions}>
          <AnchorButton href="#contact">{content.hero.cta}</AnchorButton>
          <AnchorButton href="#experience" variant="ghost">
            {content.hero.ctaSecondary}
          </AnchorButton>
        </div>
      </div>
    </section>
  )
}
