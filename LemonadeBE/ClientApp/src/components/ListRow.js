import React from 'react';
import Lemon from './../img/lemon.png'
import Trash from './../img/trash-icon.svg'
import QuantityComponent from './QuantityComponent.js'

function ListRow(props) {

    return (<tr className='List-row'>
                <td className='lemon-cell'>
                    <span>
                    <img className='lemon-img' src={Lemon} alt='lemon'></img>
                    </span>
                </td>
                <td className='flavor'>
                    <span>
                        {props.flavor}
                    </span>
                    <span className='size-text'>
                        <br></br>
                        {props.size}
                    </span>
                </td>
                <td>
                    {props.price}{props.price === 1 ? '.00' : '0'}
                </td>
                <td className='quantity-text'>
                    <QuantityComponent></QuantityComponent>
                </td>
                <td className='total-text'>
                    1.00
                </td>
                <td className='trash'>
                    <img src={Trash} alt='trash'className='trash-icon'></img>
                </td>
            </tr>)
};

export default ListRow;