import styles from './RegsitrationPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';
import { UserFocus } from 'phosphor-react';
import { HeaderLayer } from '../../components/HeaderLayer'

export const ListEmpresa = [
  {
    id: 1,
    name: 'Cocalqui',
    setores: [
      'Cronoanálise',
      'Qualidade',
      'PVC',
    ]
  },
  {
    id: 2,
    name: 'Aniger',
    setores: [
      'Qualidade',
      'Manutenção'
    ]
  }
]

function RegistrationPage() {

  function renderList() {
    const inputListEmpresa = (document.querySelector('#ListEmpresa')).value
    if(inputListEmpresa == 'Cocalqui') {
      console.log('Show!')
    }

    for(let i = 0; i < ListEmpresa.length; i++) {
      // console.log(ListEmpresa[i].name)
    }
  }

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
          <table>
            <tr>
              <th>Empresa:</th>
              <td>
                <select id="ListEmpresa" onChange={renderList}>
                  <option selected disabled>escolha a empresa</option>
                  <option>Cocalqui</option>
                  <option>Aniger</option>
                </select>
              </td>
            </tr>

            <tr>
              <th>Matrícula:</th>
              <td>
               <input type="text" id="inputMatricula" />
              </td>
            </tr>

            <tr>
              <th>Nome:</th>
              <td>
                <input type="text" id="InputName" />
              </td>
            </tr>

            <tr>
              <th>Setor:</th>
              <td>
                <select id="ListSetor">
                  <option selected disabled>escolha o setor</option>
                  <option>Cronoanálise</option>
                  <option>Qualidade</option>
                  <option>PVC</option>
                  <option>Manutenção</option>
                </select>
              </td>
            </tr>

            <tr>
              <th>E-mail:</th>
              <td>
               <input type="email" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className={styles.tdDescription} colSpan={2}>*somente é permitido o cadastro e e-mail corporativo. Esse será o e-mail de login no sistema.</td>
            </tr>

            <tr>
              <th>Senha:</th>
              <td>
               <input type="password" name="" id="" />
              </td>
            </tr>
            <tr>
              <td className={styles.tdDescription} colSpan={2}>*essa será a senha que será usada para acessar o sistema.</td>
            </tr>
          </table>

        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;
