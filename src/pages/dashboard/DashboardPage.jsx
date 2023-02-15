import styles from './DashboardPage.module.css'

import { TitleLayer } from '../../components/TitleLayer';
import { HeaderLayer } from '../../components/HeaderLayer';
import { Gauge, PencilSimpleLine, Trash } from 'phosphor-react'
import { ItemDashboard } from '../../components/ItemDashboard';

function DashboardPage() {
  return (
    <div>
        <TitleLayer />
      <div className={styles.container}>
        <HeaderLayer 
        icon={<Gauge size={36} weight='bold'/>}
        name='Dashboard de Acompanhamento'
        />

        <p>Filtrar de <input type="date" name="" id="" /> até <input type="date" name="" id="" /></p>

        <table className={styles.tableDashboard}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Empresa</th>
                <th>Cliente</th>
                <th>Responsável</th>
                <th>NF</th>
                <th>Setor</th>
                <th>Nota</th>
                <th>Requisição</th>
                <th>Conclusão</th>
                <th className={styles.theadButons}>
                <PencilSimpleLine
                onClick={() => console.log('Editar')}
                size={20} weight='bold' />
                <Trash
                onClick={() => console.log('Excluir')}
                size={20} weight='bold' />
                </th>
              </tr>
            </thead>

            <tbody>
              {[...Array(6)].map((tr, i) => {
              return (
                <ItemDashboard />
              )
              })}
            </tbody>


        </table>
      </div>
    </div>
  )
}

export default DashboardPage;
