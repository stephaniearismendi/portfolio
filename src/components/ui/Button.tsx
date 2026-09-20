import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={['btn', `btn--${variant}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

type AnchorButtonProps = {
  href: string
  variant?: 'primary' | 'ghost'
  className?: string
  children: ReactNode
  external?: boolean
}

export function AnchorButton({
  href,
  variant = 'primary',
  className = '',
  children,
  external = false,
}: AnchorButtonProps) {
  return (
    <a
      className={['btn', `btn--${variant}`, className].filter(Boolean).join(' ')}
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : undefined)}
    >
      {children}
    </a>
  )
}
