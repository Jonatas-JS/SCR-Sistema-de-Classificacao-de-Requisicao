import styles from './HeaderLayer.module.css'

export function HeaderLayer({ icon, name }) {
  return (
    <div className={styles.headerLayer}>
      <span>{icon}</span>
      <h1>{name}</h1>
    </div>
  )
}