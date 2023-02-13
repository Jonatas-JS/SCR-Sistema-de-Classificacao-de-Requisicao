import styles from './ConcludedView.module.css'

import { CircleWavyCheck } from 'phosphor-react'

function ConcludedView() {

  function redirectrion() {
    setTimeout(() => {
      location.href='/home'
    }, 2000);
  }
  redirectrion()

  return (
    <div className={styles.background}>
      <div className={styles.concluded}>
       <CircleWavyCheck size={86} weight='bold' />
       <h1>Concluído</h1>
      </div>

      <div className={styles.agradecimento}>
        <p>Obrigado por colaborar!</p>
      </div>
   </div>
  )
}
export default ConcludedView
 