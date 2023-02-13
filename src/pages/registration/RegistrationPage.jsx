import styles from './RegsitrationPage.module.css'

import { useState } from 'react';
import { TitleLayer } from '../../components/TitleLayer';
import { UserFocus, ArrowCircleRight } from 'phosphor-react';
import { HeaderLayer } from '../../components/HeaderLayer'
import { ButtonAction } from '../../components/ButtonAction';
import { Link } from 'react-router-dom';

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



function RegistrationPage() {

  const [selectedCompany, setSelectedCompany] = useState(null)

  const renderListEmpresa = () => ListEmpresa.map(
  (item) => <option key={Number(Math.random() * 3)}>{item.name}</option>
  )

  const renderListSetores = () => ListEmpresa.find((item) => item.name === selectedCompany)?.setores.map(
  (item) => <option key={Number(Math.random() * 3)}>{item}</option>
  )

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
                <select id="ListEmpresa" onChange={(event) => setSelectedCompany(event.target.value)}>
                  <option selected disabled >escolha a empresa</option>
                  {renderListEmpresa()}
                </select>
              </td>
            </tr>

            <tr>
              <th>Matrícula:</th>
              <td className={styles.inputMatricula}>
                <input type="text" id="inputMatricula" />
              </td>
            </tr>

            <tr>
              <th>Nome:</th>
              <td className={styles.InputName}>
                <input type="text" id="InputName" />
              </td>
            </tr>

            <tr>
              <th>Setor:</th>
              <td>
                <select id="ListSetor">
                  <option selected disabled >escolha o setor</option>
                  {renderListSetores()}
                </select> 
              </td>
            </tr>

            <tr>
              <th>E-mail:</th>
              <td className={styles.inputEmail}>
                <input type="email" id="inputEmail" />
              </td>
            </tr>
            <tr>
              <td className={styles.tdDescription} colSpan={2}>*somente é permitido o cadastro e e-mail corporativo. Esse será o e-mail de login no sistema.</td>
            </tr>

            <tr>
              <th>Senha:</th>
              <td className={styles.inputPassword}>
                <input type="password" id="inputPassword" />
              </td>
            </tr>
            <tr>
              <td className={styles.tdDescription} colSpan={2}>*essa será a senha que será usada para acessar o sistema.</td>
            </tr>
          </table>

          <div className={styles.buttonCadastrar}>
            <Link to='/concluded-page'>
              <ButtonAction 
              icon={<ArrowCircleRight size={25} weight='bold'/>}
              name='Cadastrar'
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;
