import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from '../stub.js'

const ListContainer = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'data.Id', //access nested data with dot notation
        header: '',
      },
      {
        accessorKey: 'data.userFirst',
        header: '',
      },
      {
        accessorKey: 'data.userFirst',
        header: 'Price',
      },
      {
        accessorKey: 'data.userFirst',
        header: 'QTY',
      },
      {
        accessorKey: 'data.userFirst',
        header: 'Total',
      },
      {
        accessorKey: 'data.userFirst',
        header: '',
      },
    ],
    []
  );

return <div className='List-container'>
  {/* {data.map((data, key) => {
    return (
      <div key={key}>
        {data.Id}
      </div>
    )
  })} */}
  <MaterialReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
    enablePagination={false}
    enableSorting={false}
    enableTopToolbar={false}
  />
</div>
}

export default ListContainer;