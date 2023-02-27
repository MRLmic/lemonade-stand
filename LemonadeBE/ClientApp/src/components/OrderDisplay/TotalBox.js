import React, { useContext, useState } from 'react';
import { TotalContext } from '../Wrapper.js';
import {formatter} from '../utils.js'
import OrderForm from './OrderForm.js'

function TotalBox() {
    const {state}  = useContext(TotalContext);
    const [open, setOpen] = useState(false);
    const openForm = () => setOpen(true);
    let orderText = open ? 'Submit' : 'Order Now';

    function submitOrder() {
        
    }

    return (<div className='total-box'>
                <div className='total'>Total</div>
                    <TotalContext.Consumer>
                        {state => <div className='amount'>
                            {formatter.format(state.state.total)}
                        </div>}
                    </TotalContext.Consumer>
                <br></br>
                <button onClick={open ? submitOrder : openForm} className='order-button'>{orderText}</button>
                <OrderForm open={open} setOpen={setOpen}></OrderForm>
            </div>);
};

export default TotalBox;
