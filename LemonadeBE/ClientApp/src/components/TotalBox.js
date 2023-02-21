import React, { useContext } from 'react';
import { TotalContext } from './Wrapper.js';
import {formatter} from './utils.js'

function TotalBox() {
const {state}  = useContext(TotalContext);

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