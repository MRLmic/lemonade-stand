import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from '../stub.js'
import ListRow from './ListRow.js'

const ListContainer = () => {



return <div className='List-container'>
  <table>
    <tbody>
      <tr>
        <th></th>
        <th></th>
        <th className='price-header'>Price</th>
        <th className='qty-header'>QTY</th>
        <th className='total-header'>Total</th>
      </tr>
        <ListRow>
        </ListRow>
        <ListRow>
        </ListRow>
        <ListRow>
        </ListRow>
        <ListRow>
        </ListRow>
    </tbody>
  </table>
</div>
}

export default ListContainer;