import styles from './EventStreamVisual.module.css'

const NODES = [
  { x: 28, y: 32, delay: '0s' },
  { x: 52, y: 24, delay: '0.5s' },
  { x: 74, y: 38, delay: '1s' },
  { x: 44, y: 58, delay: '1.4s' },
  { x: 68, y: 66, delay: '1.8s' },
] as const

export function EventStreamVisual() {
  return (
    <div className={styles.frame}>
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
              <stop offset="0%" stopColor="#3de0ff" />
              <stop offset="55%" stopColor="#ff5c8a" />
              <stop offset="100%" stopColor="#c8ff6a" />
            </linearGradient>
          </defs>
          <path
            className={styles.path}
            d="M8 42 C 26 18, 40 22, 54 40 S 78 68, 96 44"
            fill="none"
            stroke="url(#stream)"
            strokeWidth="1"
          />
          <path
            className={`${styles.path} ${styles.pathAlt}`}
            d="M6 64 C 28 78, 44 66, 58 48 S 82 28, 96 56"
            fill="none"
            stroke="url(#stream)"
            strokeWidth="0.85"
            opacity="0.55"
          />
          {NODES.map((node) => (
            <circle
              key={`${node.x}-${node.y}`}
              className={styles.node}
              cx={node.x}
              cy={node.y}
              r="1.6"
              style={{ animationDelay: node.delay }}
            />
          ))}
        </svg>
      </div>
      <div className={styles.fade} />
    </div>
  )
}
