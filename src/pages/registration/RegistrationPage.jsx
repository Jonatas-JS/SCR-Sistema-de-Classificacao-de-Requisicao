import styles from './RegsitrationPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';

function RegistrationPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <h1>RegistrationPage</h1>
      </div>
    </div>
  )
}

export default RegistrationPage;