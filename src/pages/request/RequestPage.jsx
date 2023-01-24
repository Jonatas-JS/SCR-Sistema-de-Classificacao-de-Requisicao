import styles from './RequestPage.module.css'

import { ListPlus } from 'phosphor-react'
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';

function RequestPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <HeaderLayer 
        icon={<ListPlus size={36} weight='bold'/>}
        name='Cadastrar Requisição'
        />
        <div className={styles.form}>
          <div>
            <label>Empresa: </label>
            <select>
              <option value="option" selected disabled >Escolha a Empresa</option>
            </select>
          </div>

          <div>
            <label>Cliente: </label>
            <select>
              <option selected disabled >Escolha o Cliente</option>
            </select>
          </div>

          <div>
            <label>Responsável: </label>
            <select>
              <option selected disabled >Escolha o Responsável</option>
            </select>
          </div>

          <div>
            <label>Setor: </label>
            <select>
              <option selected disabled >Escolha o Setor</option>
            </select>
          </div>

          <div className={styles.notaFiscal}>
            <label>NF: </label>
            <input type="text" id="notaFiscal" />
          </div>

          <label>Resquisição: </label>
          <input type="date" id="" />

          <p><label>Descrição: </label></p>
          <textarea cols="30" rows="10"  ></textarea>
        </div>
      </div>
    </div>
  )
}

export default RequestPage;