import styles from './HomePage.module.css'

import { MenuButton } from '../../components/MenuButton';
import { House, UserFocus, Gauge, ListPlus, CircleWavyCheck } from 'phosphor-react'
import { userType } from '../login/LoginPage';
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';
import { Link } from 'react-router-dom'

function HomePage() {
  return (
      <div>
        <TitleLayer />
        <div className={styles.container}>
          <HeaderLayer
          icon={<House size={36} weight='bold'/>}
          name='Home'
          />
          <div className={styles.menuButtons}>
            {userType === 'adm' ? 
              <div>
                <Link to='/registration'>
                  <MenuButton 
                  icon={<UserFocus size={36} weight='bold'/>}
                  name='Cadastro de Usuário'
                  />
                </Link>
              </div>
            : null }

            {userType != 'user' ?
            <div>
              <Link to='/request'>
                <MenuButton 
                icon={<ListPlus size={36} weight='bold'/>}
                name='Cadastrar Requisição'
                />
              </Link>
            </div>
            : null }
            
            <div>
              <Link to='/form-page'>
                <MenuButton 
                icon={<CircleWavyCheck size={36} weight='bold'/>}
                name='Formulário de Satisfação'
                />
              </Link>
            </div>
            {userType === 'adm' ?
              <div>
                <Link to='/dashboard'>
                  <MenuButton 
                  icon={<Gauge size={36} weight='bold'/>}
                  name='Dashboard de Acompanhamento'
                  />
                </Link>
              </div>
            :null}
          </div>
        </div>
    </div>
  )
}

export default HomePage;
