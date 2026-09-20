import { GlassSurface } from '@/components/ui/GlassSurface'
import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Experience.module.css'

export function Experience() {
  const { content } = useLanguage()

  return (
    <Section id="experience" title={content.experience.title}>
      <div className={styles.timeline}>
        {content.experience.jobs.map((job) => (
          <GlassSurface key={`${job.company}-${job.period}`} className={styles.card} as="article">
            <div className={styles.header}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
            </div>
            <p className={styles.description}>{job.description}</p>
            {job.stack && (
              <ul className={styles.stack}>
                {job.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
          </GlassSurface>
        ))}
      </div>
    </Section>
  )
}
