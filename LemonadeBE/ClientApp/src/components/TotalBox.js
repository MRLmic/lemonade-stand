import React, { useContext } from 'react';
import { TotalContext } from './Wrapper.js';

function TotalBox() {
const {state}  = useContext(TotalContext);

    return (<div className='total-box'>
                <div className='total'>Total</div>
                    <TotalContext.Consumer>
                        {state => <div className='amount'>
                            ${state.state.total}
                        </div>}
                    </TotalContext.Consumer>
                <br></br>
                <button className='order-button'>Order Now</button>
            </div>);
};

export default TotalBox;