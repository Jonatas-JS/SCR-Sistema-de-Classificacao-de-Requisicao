import styles from './TitleLayer.module.css'

import ButtonHomeAndExit from './ButtonHomeAndExit'

export function TitleLayer() {
  return (
    <div className={styles.titleLayer}>
      <div className={styles.titleHeader}>
        <h1>SCR</h1>
        <p>Sistema de Classificação de Requisições</p>
      </div>
      <div>
        <ButtonHomeAndExit />
      </div>
    </div>
  )
}