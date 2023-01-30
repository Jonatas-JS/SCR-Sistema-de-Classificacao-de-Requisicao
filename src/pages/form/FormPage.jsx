import styles from './FormPage.module.css'

import { CircleWavyCheck, Star } from 'phosphor-react'
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer'

function FormPage() {

  let starSelected = false

  function selectStars() {
    if (starSelected === false) {
      console.log(starSelected = true)
    } else {
      console.log(starSelected = false)
    }
  }

  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <HeaderLayer 
        icon={<CircleWavyCheck size={36} weight='bold' />}
        name='Formulário de Satisfação'
        />

        <div className={styles.formHeader}>
          <p>*preencha o formulário de acordo com a sua experiência em relação aos serviços prestados pelo setor referente a essa requisição.</p>
          <table>
            <tr>
              <th>Requisição: </th>
              <td>5</td>
            </tr>
            <tr>
              <th>Setor Avaliado: </th>
              <td>TRANSPORTE</td>
            </tr>
          </table>

        </div>

        <div className={styles.formAvaliacao}>
          <div className={styles.headerLayer}>
            <HeaderLayer 
            icon={<CircleWavyCheck size={28} />}
            name='AVALIAÇÃO'
          />
          </div>

          <div>
            <p>De 0 (zero) a 5 (cinco), como foi sua experiência com os nossos serviços?</p>
            <div className={styles.formAvaliations}>
              <label>Atendimento: </label>
              <Star size={22} onClick={selectStars} className={styles.starSelected}/>
              <Star size={22} onClick={selectStars} className={styles.starSelected}/>
              <Star size={22} onClick={selectStars} className={styles.starSelected}/>
              <Star size={22} onClick={selectStars} className={styles.starSelected}/>
              <Star size={22} onClick={selectStars} className={styles.starSelected}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPage;