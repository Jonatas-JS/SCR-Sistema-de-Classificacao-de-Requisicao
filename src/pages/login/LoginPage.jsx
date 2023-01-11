import styles from './LoginPage.module.css'
import { Scroll, UserCircle } from 'phosphor-react'
import { Link } from 'react-router-dom';
import HomePage from '../home/HomePage'

const user = [
  {
    id: 1,
    userType: 'adm',
    userName: 'Jônatas Fernandes',
    userLogin: 'jonatas.silva',
    userPassword: '123',
  },
  {
    id: 2,
    userType: 'user',
    userName: 'Carlos Eduardo',
    userLogin: 'carlos.romano',
    userPassword: '123',
  },
]


function LoginPage() {
  
  //Falta a realizar a validação por user/password
  const userType = user[0].userType;
  console.log(userType)

  return (
    <div className={styles.container}>
      <div className={styles.logoSpace}>
        <h1>SCR</h1>
        <div className={styles.iconScr}><Scroll size={78} />
          <div className={styles.srcIcon}>Sistema de <br/> Classificação de<br/> Requisições</div>
        </div>
      </div>
      <div className={styles.loginSpace}>
        <div className={styles.titleLogin}>
          <UserCircle size={30} weight="bold"/>
          <h3>Login</h3>
        </div>

        <div className={styles.inputsLogin}>
          <p>Usuário</p>
          <input type="text" name="passwordLogin" id="userLogin"/>
          <p>Senha</p>
          <input type="password" name="passwordLogin" id="passwordLogin" />
        </div>
        
          <Link to='/home'><button type="submit">ENTRAR</button></Link>

      </div>
    </div>
  )
}

export default LoginPage;