import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  layout?: 'stack' | 'split'
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  layout = 'stack',
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={[
        styles.section,
        'reveal',
        visible ? 'is-visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[
          'container',
          styles.inner,
          layout === 'split' ? styles.split : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  )
}
