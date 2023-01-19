import styles from './RegsitrationPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';
import { UserFocus } from 'phosphor-react';
import { HeaderLayer } from '../../components/HeaderLayer'

export const ListEmpresa = [
  {
    id: 0,
    name: 'Cocalqui',
    setores: [
      'Cronoanálise',
      'Qualidade',
      'PVC',
    ]
  },
  {
    id: 1,
    name: 'Aniger',
    setores: [
      'Qualidade',
      'Manutenção'
    ]
  }
]

const renderListEmpresa = ListEmpresa.map(
  (item) => <option>{item.name}</option>
)
const renderListSetores = ListEmpresa[0].setores.map(
  (item) => <option>{item}</option>
)

function sectionEmpresa() {
  const mostrar = document.querySelector('#ListEmpresa').value
  for (let i = 0; ListEmpresa[i].name != mostrar; i++ ) {
    console.log('Ainda não é esse')
  }
  console.log(mostrar)
}

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
          <table>
            <tr>
              <th>Empresa:</th>
              <td>
                <select id="ListEmpresa" onChange={sectionEmpresa}>
                  <option selected disabled>escolha a empresa</option>
                  {renderListEmpresa}
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
                  {renderListSetores}
                </select>
              </td>
            </tr>

            <tr>
              <th>E-mail:</th>
              <td>
               <input type="email" id="inputEmail" />
              </td>
            </tr>
            <tr>
              <td className={styles.tdDescription} colSpan={2}>*somente é permitido o cadastro e e-mail corporativo. Esse será o e-mail de login no sistema.</td>
            </tr>

            <tr>
              <th>Senha:</th>
              <td>
               <input type="password" id="inputPassword" />
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
