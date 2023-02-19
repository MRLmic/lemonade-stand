import React from 'react';
import Lemon from './../img/lemon.png'
import Trash from './../img/trash-icon.svg'

const ListRow = () => {

    return (<tr className='List-row'>
                <td className='lemon-cell'>
                    <span>
                    <img className='lemon-img' src={Lemon} alt='lemon'></img>
                    </span>
                </td>
                <td className='flavor'>
                    <span>
                        Kind
                    </span>
                    <span className='size-text'>
                        <br></br>
                        Size
                    </span>
                </td>
                <td>
                    1.00
                </td>
                <td className='quantity-text'>
                     1
                </td>
                <td className='total-text'>
                    1.00
                </td>
                <td>
                    <img src={Trash} alt='trash'className='trash-icon'></img>
                </td>
            </tr>)
};

export default ListRow;