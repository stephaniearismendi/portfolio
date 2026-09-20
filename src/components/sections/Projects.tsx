import { GlassSurface } from '@/components/ui/GlassSurface'
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
    >
      <div className={styles.grid}>
        {content.projects.items.map((project) => (
          <GlassSurface
            key={project.name}
            className={styles.card}
            as="article"
            interactive
          >
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.stack}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer noopener">
                  Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer noopener">
                  Code
                </a>
              )}
            </div>
          </GlassSurface>
        ))}
      </div>
    </Section>
  )
}
