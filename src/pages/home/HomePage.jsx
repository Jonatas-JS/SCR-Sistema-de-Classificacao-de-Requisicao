import styles from './HomePage.module.css'

import { MenuButton } from '../../components/MenuButton';
import { House, UserFocus, ListPlus, CircleWavyCheck } from 'phosphor-react'
import { userType } from '../login/LoginPage';
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';
import { Link } from 'react-router-dom'

function HomePage() {
  if (userType == 'adm') {
    
    return (
        <div>
          <TitleLayer />
          <div className={styles.container}>
            <HeaderLayer
            icon={<House size={36} weight='bold'/>}
            name='Home'
            />
            <div className={styles.menuButtons}>
              <div>
                <Link to='/registration'>
                  <MenuButton 
                  icon={<UserFocus size={36} weight='bold'/>}
                  name='Cadastro de Usuário'
                  />
                </Link>
              </div>

              <div>
                <Link to='/request'>
                  <MenuButton 
                  icon={<ListPlus size={36} weight='bold'/>}
                  name='Cadastrar Requisição'
                  />
                </Link>
              </div>

              <div>
                <Link to='/form-page'>
                  <MenuButton 
                  icon={<CircleWavyCheck size={36} weight='bold'/>}
                  name='Formulário de Satisfação'
                  />
                </Link>
              </div>
            </div>
          </div>
      </div>
    )
  } else if (userType == 'manager') {

    return (
      <div>
        <TitleLayer />
        <div className={styles.container}>
          <HeaderLayer
          icon={<House size={36} weight='bold'/>}
          name='Home'
          />
          <div className={styles.menuButtons}>
            <div>
              <Link to='/request'>
                <MenuButton 
                icon={<ListPlus size={36} weight='bold'/>}
                name='Cadastrar Requisição'
                />
              </Link>
            </div>

            <div>
              <Link to='/form-page'>
                <MenuButton 
                icon={<CircleWavyCheck size={36} weight='bold'/>}
                name='Formulário de Satisfação'
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
  } else {

    return (
      <div>
        <TitleLayer />
        <div className={styles.container}>
          <HeaderLayer
          icon={<House size={36} weight='bold'/>}
          name='Home'
          />
          <div className={styles.menuButtons}>
             <div>
              <Link to='/form-page'>
                <MenuButton 
                icon={<CircleWavyCheck size={36} weight='bold'/>}
                name='Formulário de Satisfação'
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
  }
}

export default HomePage;