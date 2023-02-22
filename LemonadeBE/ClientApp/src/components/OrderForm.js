import React from 'react';

export default function OrderForm(props) {
    if (props.open) { 
    return (<form>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <label>
                Phone Number:
                <input type="text" name="name" />
                </label>
                <label>
                Email:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
           </form>) 
    } else {return ""};   
}