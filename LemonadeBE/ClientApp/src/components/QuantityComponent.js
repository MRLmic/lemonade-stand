import React, {useContext} from 'react'
import { TotalContext } from './Wrapper.js'

function QuantityComponent() {
const {state,dispatch}  = useContext(TotalContext);

return (
        <div>
            <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
            <span className='quantity-text'>{state.total}</span>
            <button onClick={() => dispatch({type: 'PLUS'})}>+</button>
        </div>
        )
}

export default QuantityComponent;