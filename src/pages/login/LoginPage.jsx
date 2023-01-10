import styles from './LoginPage.module.css'
import { Scroll, UserCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

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

          <button type="submit">ENTRAR</button>
      </div>
    </div>
  )
}

export default LoginPage;