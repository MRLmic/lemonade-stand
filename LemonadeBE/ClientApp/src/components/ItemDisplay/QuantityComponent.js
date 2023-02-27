import React, {useContext} from 'react'
import { TotalContext } from '../Wrapper.js'

function QuantityComponent(props) {
const {state,dispatch}  = useContext(TotalContext);
let quantity = state.order[props.itemName];
return (
        <div>
            <button onClick={() => dispatch({type: "MINUS", itemName: props.itemName, price: props.price})}>-</button>
            <span className='quantity-text'>{quantity}</span>
            <button onClick={() => dispatch({type: "PLUS", itemName: props.itemName, price: props.price})}>+</button>
        </div>
        )
}

export default QuantityComponent;