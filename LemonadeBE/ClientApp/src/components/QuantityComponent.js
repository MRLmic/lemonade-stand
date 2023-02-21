import React, {useContext} from 'react'
import { TotalContext } from './Wrapper.js'

function QuantityComponent(props) {
const {state,dispatch}  = useContext(TotalContext);
let quantity = state[props.size + props.flavor]
return (
        <div>
            <button onClick={() => dispatch({type: 'MINUS', flavor: props.flavor, size: props.size, price: props.price})}>-</button>
            <span className='quantity-text'>{quantity}</span>
            <button onClick={() => dispatch({type: 'PLUS', flavor: props.flavor, size: props.size, price: props.price})}>+</button>
        </div>
        )
}

export default QuantityComponent;