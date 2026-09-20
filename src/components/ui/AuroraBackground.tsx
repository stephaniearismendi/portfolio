import styles from './AuroraBackground.module.css'

export function AuroraBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={`${styles.blob} ${styles.cyan}`} />
      <div className={`${styles.blob} ${styles.coral}`} />
      <div className={`${styles.blob} ${styles.lime}`} />
      <div className={styles.noise} />
      <div className={styles.vignette} />
    </div>
  )
}
