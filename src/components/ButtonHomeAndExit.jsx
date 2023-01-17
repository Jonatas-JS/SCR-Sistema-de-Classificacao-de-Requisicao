import styles from './ButtonHomeAndExit.module.css'

import { House, SignOut } from 'phosphor-react'
import { Link } from 'react-router-dom';

function ButtonHomeAndExit() {
  return (
    <div className={styles.buttonHomeAndExit}>
      <div className={styles.homeButton}>
        <Link to='/home'>
          <span><House  size={27} weight='bold'/></span>
          <p>Home</p>
        </Link>
      </div>
      <div className={styles.exitButton}>
        <Link to='/'>
          <span><SignOut size={27} weight='bold'/></span>
          <p>Sair</p>
        </Link>
      </div>
    </div>
  )
}

export default ButtonHomeAndExit;