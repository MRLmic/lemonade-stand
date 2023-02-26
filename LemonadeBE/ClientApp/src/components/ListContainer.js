import React from 'react';
import ListRow from './ListRow.js'

function ListContainer() {

const orderTypes = [ 
  {
    flavor: "Lemonade",
    size: "Regular",
    price: 1
  },
  {
    flavor: "Pink Lemonade",
    size: "Regular",
    price: 1
  },
  {
    flavor: "Lemonade",
    size: "Large",
    price: 1.5
  },
  {
    flavor: "Pink Lemonade",
    size: "Large",
    price: 1.5
  }
];

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
                {orderTypes.map((type, index) => <ListRow key={index} flavor={type.flavor} size={type.size} price={type.size === "Regular" ? 1 : 1.5}></ListRow>)}
            </tbody>
          </table>
        </div> 
}

export default ListContainer;