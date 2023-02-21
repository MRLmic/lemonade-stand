import React, { useContext } from 'react';
import { TotalContext } from './Wrapper.js';

function TotalBox() {
const total = useContext(TotalContext);

    return <div className='total-box'>
                <div className='total'>Total</div>
                    <TotalContext.Consumer>
                        {total => <div className='amount'>
                            $ {total.total}
                        </div>}
                    </TotalContext.Consumer>
                <br></br>
                <button className='order-button'>Order Now</button>
            </div>;
};

export default TotalBox;