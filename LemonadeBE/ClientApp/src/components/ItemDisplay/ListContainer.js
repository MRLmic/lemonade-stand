import React from 'react';
import ListRow from './ListRow.js'

class ListContainer extends React.Component {

  render() {

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
          {this.props.orderTypes.map((type, index) => <ListRow key={index} itemName={type.itemName} flavor={type.flavor} size={type.size} price={type.size === "Regular" ? 1 : 1.5}></ListRow>)}
        </tbody>
      </table>
    </div>
  }
};

export default ListContainer;