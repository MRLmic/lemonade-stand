import React, {createContext, useReducer, useEffect} from 'react';
import ListContainer from './ItemDisplay/ListContainer.js'
import TotalBox from './OrderDisplay/TotalBox.js'

export const TotalContext = createContext({
    orderName: '',
    orderEmail: '',
    orderPhone: '',
    total:0,
    order: {'LEMREG': 0, 'LEMLARGE': 0, 'PINKLARGE': 0, 'PINKREG': 0}
});

export default function Wrapper() {
    useEffect(() => {
        const url = "http://lemonadestandmljh.scm.azurewebsites.net/api/Product";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                dispatch({type:"UPDATE", types: json})
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const initialState = {
        orderName: '',
        orderEmail: '',
        orderPhone: '',
        total:0,
        order: {'LEMREG': 0, 'LEMLARGE': 0, 'PINKLARGE': 0, 'PINKREG': 0},
        types: []
    };

    function reducer(state, action) {
        let newOrder = {...state.order}
        switch(action.type) { 
            case "PLUS": 
            newOrder[action.itemName] = state.order[action.itemName] + 1
            return {
                ...state, 
                total: state.total + action.price,
                order: newOrder
            };
            case "MINUS": 
            newOrder[action.itemName] = state.order[action.itemName] > 1 ? (state.order[action.itemName] -1) : 0
            return {
                ...state,
                total: state.order[action.itemName] >= 1 ? (state.total - action.price) : state.total,
                order: newOrder
            };
            case "CLEAR":
                newOrder[action.itemName] = 0
                return {
                    ...state,
                    total: state.total - (action.price * state.order[action.itemName]),
                    order: newOrder
                }
            case "UPDATE":
                return {...state, 
                    types: action.types
                }
            case "SUBMIT":
                console.log(action.orderName)
                let orders = state.order
                postData(action.orderName, action.customerContact, action.contactType, orders)
                return {
                    ...initialState,
                    types: state.types
                }
            default: return state;
        }
    }

    const postData = (customerName, customerContact, contactType, orders) => {
        fetch('api/Orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orders: orders,
                customerName: customerName,
                customerContact: customerContact,
                contactType: contactType
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                const orderId = data.orderId
                alert(`Thank you! Your Order ID is ${orderId}`)
            })
            .catch((err) => console.log(err))
    }

   
    const [ state, dispatch ] = useReducer(reducer, initialState);

         return (<TotalContext.Provider value={{state, dispatch}}>
                    <div>
                    <ListContainer  orderTypes={state.types}></ListContainer>
                    <TotalBox></TotalBox>
                    </div>
                    </TotalContext.Provider>
                );
};
