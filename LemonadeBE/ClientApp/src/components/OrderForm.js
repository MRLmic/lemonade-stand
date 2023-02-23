import React, {useRef} from 'react';

export default function OrderForm({open,setOpen}) {
    const phoneNumRef = useRef('');
    const emailRef = useRef('');

    if (open) { 
        function validateForm(e) {
            e.preventDefault();
            if (phoneNumRef.current.value === '' && emailRef.current.value === '') {
                alert('An email or phone number is required to place an order.')
                return;
            } else {
                setOpen(false);
            }
        }

    return (<form onSubmit={validateForm} className="OrderForm">
                <span>Please enter your name and your phone number OR email</span><br></br>
                <label>
                Name:
                <input required autoFocus type="text" name="name" />
                </label><br></br>
                <label>
                Phone Number (no more than 10 numbers):
                <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" maxLength="10" name="phone number" ref={phoneNumRef}/>
                </label><br></br>
                <label>
                Email:
                <input type="email" name="email" ref={emailRef} />
                </label><br></br>
                <input type="submit" value="Submit" />
           </form>) 
    } else {return ""};   
}