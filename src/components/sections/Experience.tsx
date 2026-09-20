import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Experience.module.css'

export function Experience() {
  const { content } = useLanguage()

  return (
    <Section id="experience" title={content.experience.title} layout="split">
      <ol className={styles.list}>
        {content.experience.jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className={styles.item}>
            <article className={styles.entry}>
              <div className={styles.top}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
                <div className={styles.meta}>
                  <span>{job.period}</span>
                  <span className={styles.location}>{job.location}</span>
                </div>
              </div>
              <p className={styles.description}>{job.description}</p>
              {job.stack ? (
                <ul className={styles.stack}>
                  {job.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
