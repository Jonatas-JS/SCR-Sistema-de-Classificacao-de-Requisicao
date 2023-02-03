import styles from './ConcludedView.module.css'

export function ConcludedView() {
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