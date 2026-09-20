import { useEffect, useRef, useState } from 'react'

type UseRevealOptions = {
  threshold?: number
  rootMargin?: string
}

export function useReveal<T extends HTMLElement>({
  threshold = 0.18,
  rootMargin = '0px 0px -8% 0px',
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}
