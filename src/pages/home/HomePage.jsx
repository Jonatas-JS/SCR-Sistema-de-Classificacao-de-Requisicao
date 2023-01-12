import styles from './HomePage.module.css'

import { MenuButton } from '../../components/MenuButton';
import { UserFocus, ListPlus, CircleWavyCheck } from 'phosphor-react'
import { userType } from '../login/LoginPage';
import { TitleLayer } from '../../components/TitleLayer';

function HomePage() {
  console.log(userType)
  if (userType == 'adm') {
    return (
      <div className={styles.menuButtons}>
        <TitleLayer />
        <div>
        <MenuButton 
        icon={<UserFocus size={36} weight='bold'/>}
        name='Cadastro de Usuário'
        />
        </div>

        <div>
        <MenuButton 
        icon={<ListPlus size={36} weight='bold'/>}
        name='Cadastrar Requisição'
        />
        </div>

        <div>
        <MenuButton 
        icon={<CircleWavyCheck size={36} weight='bold'/>}
        name='Formulário de Satisfação'
        />
        </div>

      </div>
    )
  } else if (userType == 'manager') {
    return (
      <div className={styles.menuButtons}>
        <TitleLayer />
        <div>
        <MenuButton 
        icon={<ListPlus size={36} weight='bold'/>}
        name='Cadastrar Requisição'
        />
        </div>

        <div>
        <MenuButton 
        icon={<CircleWavyCheck size={36} weight='bold'/>}
        name='Formulário de Satisfação'
        />
        </div>

      </div>
    )
  } else {
    return (
      <div className={styles.menuButtons}>
        <TitleLayer />
        <div>
        <MenuButton 
        icon={<CircleWavyCheck size={36} weight='bold'/>}
        name='Formulário de Satisfação'
        />
        </div>

      </div>
    )
  }
}

export default HomePage;