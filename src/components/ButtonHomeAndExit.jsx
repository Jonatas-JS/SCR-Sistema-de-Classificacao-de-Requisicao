import styles from './ButtonHomeAndExit.module.css'

import { House, SignOut } from 'phosphor-react'

function ButtonHomeAndExit() {
  return (
    <div className={styles.buttonHomeAndExit}>
      <div className={styles.homeButton}>
        <span><House  size={27} weight='bold'/></span>
        <p>Home</p>
      </div>
      <div className={styles.exitButton}>
        <span><SignOut size={27} weight='bold'/></span>
        <p>Sair</p>
      </div>
    </div>
  )
}

export default ButtonHomeAndExit;