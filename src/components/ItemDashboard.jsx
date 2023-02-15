import styles from './ItemDashboard.module.css'

export function ItemDashboard() {
  return (
      <tr className={styles.trBody}>
        {[...Array(11)].map((tb, i) => {
        return (
          <td>{i}</td>
        )
        })}
      </tr>
  )
}