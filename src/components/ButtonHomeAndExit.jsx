import styles from './ButtonHomeAndExit.module.css'

import { House, SignOut } from 'phosphor-react'

function ButtonHomeAndExit() {
  return (
    <div className={styles.buttonHomeAndExit}>
      <div className={styles.homeButton}>
        <span><House  size={32} /></span>
        <p>Home</p>
      </div>
      <div className={styles.exitButton}>
        <span><SignOut size={32} /></span>
        <p>Sair</p>
      </div>
    </div>
  )
}

export default ButtonHomeAndExit;