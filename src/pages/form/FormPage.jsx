import styles from './FormPage.module.css'

import { useState } from 'react';
import { CircleWavyCheck, Star } from 'phosphor-react';
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer'
import { Stars } from '../../components/Stars';

function FormPage() {

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
              <div>
                <Stars 
                name='Atendimento:'
                />

                <Stars 
                name='Prazos:'
                />

                <Stars 
                name='Feedback (comunicação):'
                />
              </div>
              <div className={styles.comentario}>
                <label>Comentário/observação:</label>
                <textarea name="comentario" id="comentario" cols="30" rows="10" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPage;