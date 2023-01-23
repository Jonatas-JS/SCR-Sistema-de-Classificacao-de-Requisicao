import styles from './RequestPage.module.css'

import { ListPlus } from 'phosphor-react'
import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';

function RequestPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <HeaderLayer 
        icon={<ListPlus size={36} weight='bold'/>}
        name='Cadastrar Requisição'
        />
      </div>
    </div>
  )
}

export default RequestPage;