import styles from './RequestPage.module.css';

import { ListPlus, Paperclip } from 'phosphor-react';
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';
import { ButtonAction } from '../../components/ButtonAction'
import { Link } from 'react-router-dom';
import { ListEmpresa } from '../registration/RegistrationPage';

export const validacoesDeRequisicao = [
  'clientes', 'game'
]

console.log(validacoesDeRequisicao.length)


const renderListEmpresa = () => ListEmpresa.map(
  (item) => <option>{item.name}</option>
)
// const renderListCliente = () => validacoesDeRequisicao.clientes.map(
//   (item) => <option>{item.name}</option>
//   )
// const renderListResponsavel = () => validacoesDeRequisicao.responsavel.map(
//   (item) => <option>{item.name}</option>
// )
// const renderListSetor = () => validacoesDeRequisicao.setores.map(
//   (item) => <option>{item.name}</option>
// )

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
              {renderListEmpresa()}
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

          <div className={styles.nfRequisicao}>
            <div className={styles.notaFiscal}>
              <label>NF: </label>
              <input type="text" id="notaFiscal" />
            </div>

            <div>
              <label>Resquisição: </label>
              <input type="date" id="" />
            </div>
          </div>
            

          <p className={styles.labelDescrição}><label>Descrição: </label></p>
          <textarea cols="30" rows="10"  placeholder='Breve descrição da requisição.'></textarea>
        </div>

        <div className={styles.buttonsAvtions}>
            <ButtonAction 
            icon={<Paperclip size={25} />}
            name='Anexar'
            />
            <Link to='/concluded-page'>
              <ButtonAction 
              icon={<ListPlus size={25} weight='bold'/>}
              name='Cadastrar'
              />
            </Link>
        </div>

      </div>
    </div>
  )
}

export default RequestPage;
