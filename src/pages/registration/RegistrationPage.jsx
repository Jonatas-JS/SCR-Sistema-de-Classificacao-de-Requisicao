import styles from './RegsitrationPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';
import { UserFocus } from 'phosphor-react';
import { HeaderLayer } from '../../components/HeaderLayer'

export const ListEmpresa = [
  {
    id: 1,
    name: 'Cocalqui'
  },
  {
    id: 2,
    name: 'Aniger'
  },
  {
    id: 3,
    name: 'Cocalqui/Aniger'
  }
]

export const ListSetor = [
  {
    id: 1,
    empresa: 'Cocalqui',
    setor: 'Cronoanálise'
  },
  {
    id: 2,
    empresa: 'Aniger',
    setor: 'Qualidade'
  },
  {
    id: 3,
    empresa: 'Cocalqui',
    setor: 'PVC'
  },
  {
    id: 4,
    empresa: 'Aniger',
    setor: 'Manutenção'
  },
]

function RegistrationPage() {

  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <HeaderLayer 
        icon={<UserFocus size={36} weight='bold'/>}
        name='Cadastro de Usuário'
        />
        <p>*preencha com atenção todos os campos.</p>
        <div className={styles.camposInputs}>
          <p>
            <label htmlFor="">Empresa: </label>
            <select name="ListEmpresa" id="ListEmpresa">
              <option selected disabled>escolha a empresa</option>
              <option>Cocalqui</option>
              <option>Aniger</option>
            </select>
          </p>

          <p>
            <label htmlFor="">Matrícula: </label>
            <input type="text" name="" id="" />
          </p>

          <p>
            <label htmlFor="">Nome: </label>
            <input type="text" name="" id="" />
          </p>

          <p>
            <label htmlFor="">Setor: </label>
            <select name="ListSetor" id="ListSetor">
              <option selected disabled>escolha o setor</option>
              <option>Cronoanálise</option>
              <option>Qualidade</option>
              <option>PVC</option>
              <option>Manutenção</option>
            </select>
          </p>

          <p>
            <label htmlFor="">E-mail: </label>
            <input type="email" name="" id="" />
          </p>

          <p>*somente é permitido o cadastro e e-mail corporativo. Esse será o e-mail de login no sistema.</p>

          <p>
            <label htmlFor="">Senha: </label>
            <input type="password" name="" id="" />
          </p>

          <p>*essa será a senha que será usada para acessar o sistema.</p>

        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;
