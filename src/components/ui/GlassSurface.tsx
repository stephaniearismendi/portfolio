import type { ReactNode } from 'react'

type GlassSurfaceProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
  strong?: boolean
  interactive?: boolean
}

export function GlassSurface({
  children,
  className = '',
  as: Tag = 'div',
  strong = false,
  interactive = false,
}: GlassSurfaceProps) {
  const classes = [
    'glass',
    strong ? 'glass--strong' : '',
    interactive ? 'glass--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes}>{children}</Tag>
}
