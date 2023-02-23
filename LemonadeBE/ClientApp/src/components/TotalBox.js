import React, { useContext, useState } from 'react';
import { TotalContext } from './Wrapper.js';
import {formatter} from './utils.js'
import OrderForm from './OrderForm.js'

function TotalBox() {
    const {state}  = useContext(TotalContext);
    const [open, setOpen] = useState(false);

    const openForm = () => setOpen(true);
    return (<div className='total-box'>
                <div className='total'>Total</div>
                    <TotalContext.Consumer>
                        {state => <div className='amount'>
                            {formatter.format(state.state.total)}
                        </div>}
                    </TotalContext.Consumer>
                <br></br>
                <button onClick={openForm} className='order-button'>Order Now</button>
                <OrderForm open={true} setOpen={setOpen}></OrderForm>
            </div>);
};

export default TotalBox;
