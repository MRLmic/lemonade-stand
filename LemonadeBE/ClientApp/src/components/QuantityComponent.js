import React, {useState} from 'react'

function QuantityComponent() {
    const [count, setCount] = useState(0);

    return (<section>
                <button onClick={() => setCount(count - 1)}>-</button>
                <text className='quantity-text'>{count}</text>
                <button onClick={() => setCount(count + 1)}>+</button>
            </section>)
}

export default QuantityComponent;