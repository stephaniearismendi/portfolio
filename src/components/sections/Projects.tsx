import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Projects.module.css'

export function Projects() {
  const { content } = useLanguage()

  return (
    <Section
      id="projects"
      title={content.projects.title}
      subtitle={content.projects.subtitle}
      layout="split"
    >
      <ul className={styles.list}>
        {content.projects.items.map((project) => (
          <li key={project.name} className={styles.item}>
            <div className={styles.top}>
              <h3 className={styles.name}>{project.name}</h3>
              <div className={styles.links}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer noopener">
                    Live
                  </a>
                ) : null}
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer noopener">
                    Code
                  </a>
                ) : null}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.stack}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
