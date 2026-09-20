import styles from './EventStreamVisual.module.css'

const NODES = [
  { x: 22, y: 30, delay: '0s' },
  { x: 48, y: 20, delay: '0.4s' },
  { x: 72, y: 34, delay: '0.8s' },
  { x: 38, y: 58, delay: '1.1s' },
  { x: 66, y: 64, delay: '1.5s' },
  { x: 84, y: 52, delay: '1.9s' },
] as const

export function EventStreamVisual() {
  return (
    <div className={styles.frame}>
      <div className={styles.orbA} />
      <div className={styles.orbB} />
      <div className={styles.sheet}>
        <svg
          className={styles.svg}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          role="presentation"
          focusable="false"
        >
          <defs>
            <linearGradient id="stream" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00e8ff" />
              <stop offset="50%" stopColor="#ff4d7a" />
              <stop offset="100%" stopColor="#d6ff3d" />
            </linearGradient>
            <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className={styles.path}
            d="M4 40 C 22 10, 38 18, 52 36 S 78 62, 98 38"
            fill="none"
            stroke="url(#stream)"
            strokeWidth="1.1"
            filter="url(#softGlow)"
          />
          <path
            className={`${styles.path} ${styles.pathAlt}`}
            d="M2 66 C 24 82, 42 70, 56 50 S 82 24, 98 54"
            fill="none"
            stroke="url(#stream)"
            strokeWidth="0.95"
            opacity="0.7"
          />

          {NODES.map((node) => (
            <g key={`${node.x}-${node.y}`}>
              <circle
                className={styles.nodePulse}
                cx={node.x}
                cy={node.y}
                r="4.2"
                style={{ animationDelay: node.delay }}
              />
              <circle
                className={styles.node}
                cx={node.x}
                cy={node.y}
                r="1.9"
                style={{ animationDelay: node.delay }}
              />
            </g>
          ))}
        </svg>
      </div>
      <div className={styles.fade} />
    </div>
  )
}
