import styles from './ItemDashboard.module.css'
import { PencilSimpleLine, Trash } from 'phosphor-react'

export function ItemDashboard() {
  return (
      <tr className={styles.trBody}>
        {[...Array(10)].map((tb, i) => {
        return (
          <td>{i}</td>
        )
        })}
        <td className={styles.buttonsAction}>
          <PencilSimpleLine size={20} weight='bold' />
          <Trash size={20} weight='bold' />
        </td>
      </tr>
  )
}
