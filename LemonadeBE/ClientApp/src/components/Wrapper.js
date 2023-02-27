import React, {createContext, useReducer, useEffect, useState} from 'react';
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
        const url = "http://localhost:5101/api/Product";

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
            default: return state;
        }
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
