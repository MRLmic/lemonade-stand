import React, { useContext } from 'react';
import { TotalContext } from './Wrapper.js';

function TotalBox() {
const {state}  = useContext(TotalContext);

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    return (<div className='total-box'>
                <div className='total'>Total</div>
                    <TotalContext.Consumer>
                        {state => <div className='amount'>
                            {formatter.format(state.state.total)}
                        </div>}
                    </TotalContext.Consumer>
                <br></br>
                <button className='order-button'>Order Now</button>
            </div>);
};

export default TotalBox;