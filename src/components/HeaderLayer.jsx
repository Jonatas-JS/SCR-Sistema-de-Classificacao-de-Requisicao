import styles from './HeaderLayer.module.css'

export function HeaderLayer({ icon, name }) {
  return (
    <div className={styles.headerLayer}>
      <h1>{icon}</h1>
      <p>{name}</p>
    </div>
  )
}