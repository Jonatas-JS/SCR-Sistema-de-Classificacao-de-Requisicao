import styles from './ButtonAction.module.css'

export function ButtonAction({ icon, name }) {
  return (
    <div className={styles.button}>
     <button>{icon}{name}</button>
    </div>
  )
}