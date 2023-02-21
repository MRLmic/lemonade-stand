import React, {useContext} from 'react';
import Lemon from './../img/lemon.png'
import Trash from './../img/trash-icon.svg'
import QuantityComponent from './QuantityComponent.js'
import { TotalContext } from './Wrapper.js';

function ListRow(props) {
const state = useContext(TotalContext);
let flavor = props.size + props.flavor.toString();
let quantity = state.state[flavor];

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
                    <QuantityComponent flavor={props.flavor} size={props.size} price={props.price}></QuantityComponent>
                </td>
                <td className='total-text'>
                    {quantity}
                </td>
                <td className='trash'>
                    <button>
                    <img src={Trash} alt='trash'className='trash-icon'></img>
                    </button>
                </td>
            </tr>)
};

export default ListRow;