import styles from './MenuButton.module.css'

export function MenuButton({ icon, name }) {
  return (
    <div className={styles.button}>
      <span>{icon}</span>
      {name}
    </div>
  )
}