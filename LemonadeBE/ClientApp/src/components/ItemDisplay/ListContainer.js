import React from 'react';
import ListRow from './ListRow.js'

function ListContainer(props) {

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
                {props.orderTypes.map((type,index) => <ListRow key={index} itemName={type.ItemName} flavor={type.Flavor} size={type.Size} price={type.Size === "Regular" ? 1 : 1.5}></ListRow>)}
            </tbody>
          </table>
        </div> 
}

export default ListContainer;