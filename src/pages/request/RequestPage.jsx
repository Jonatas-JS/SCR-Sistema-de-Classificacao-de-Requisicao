import styles from './RequestPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';

function RequestPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <h1>RequestPage</h1>
      </div>
    </div>
  )
}

export default RequestPage;