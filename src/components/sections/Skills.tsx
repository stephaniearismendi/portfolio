import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Skills.module.css'

export function Skills() {
  const { content } = useLanguage()

  return (
    <Section id="skills" title={content.skills.title} layout="split">
      <div className={styles.groups}>
        {content.skills.groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
