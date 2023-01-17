import styles from './DashboardPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';

function DashboardPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <h1>DashBoard</h1>
      </div>
    </div>
  )
}

export default DashboardPage;