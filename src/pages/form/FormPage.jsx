import styles from './FormPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';

function FormPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <h1>FormPage</h1>
      </div>
    </div>
  )
}

export default FormPage;