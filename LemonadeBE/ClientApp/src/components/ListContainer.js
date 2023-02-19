import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from '../stub.js'
import ListRow from './ListRow.js'

const ListContainer = () => {

  const columns = useMemo(
    () => [
      {
        id: 1,
        header: '',
      },
      {
        id: 2,
        header: '',
      },
      {
        id: 3,
        header: 'Price',
      },
      {
        id: 4,
        header: 'QTY',
      },
      {
        id: 5,
        header: 'Total',
      },
      {
        id: 6,
        header: '',
      },
    ],
    []
  );

return <div className='List-container'>
  <table>
    <tbody>
      <tr>
        <th>Price</th>
        <th>QTY</th>
        <th>Total</th>
        <th></th>
      </tr>
        <ListRow>
        </ListRow>
    </tbody>
  </table>
</div>
}

export default ListContainer;