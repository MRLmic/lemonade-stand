import React, {useState, useContext} from 'react'

function QuantityComponent() {
    const [total, setTotal] = useState(0);

    return (
            <div>
                <button onClick={() => setTotal(total - 1)}>-</button>
                <span className='quantity-text'>{total}</span>
                <button onClick={() => setTotal(total + 1)}>+</button>
            </div>
            )
}

export default QuantityComponent;