import React, {createContext, useReducer} from 'react';
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
    const initialState = {
        orderName: '',
        orderEmail: '',
        orderPhone: '',
        total:0,
        types: [
            {ItemName: 'LEMREG', Flavor:'Lemonade', Size:'Regular'},
            {ItemName: 'LEMLARGE', Flavor:'Lemonade', Size:'Large'},
            {ItemName: 'PINKLARGE', Flavor:'Pink Lemonade', Size:'Large'},
            {ItemName: 'PINKREG', Flavor:'Pink Lemonade',Size:'Regular'}
        ],
        order: {'LEMREG': 0, 'LEMLARGE': 0, 'PINKLARGE': 0, 'PINKREG': 0}
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
            console.log(newOrder)

            return {
                ...state,
                total: state.order[action.itemName] >= 1 ? (state.total - action.price) : state.total,
                order: newOrder
            };
            case "CLEAR":
                newOrder[action.itemName] = 0
                console.log(newOrder)
                return {
                    ...state,
                    total: state.total - (action.price * state.order[action.itemName]),
                    order: newOrder
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
