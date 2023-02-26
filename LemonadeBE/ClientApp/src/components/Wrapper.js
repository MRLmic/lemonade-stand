import React, {createContext, useReducer} from 'react';
import ListContainer from './ItemDisplay/ListContainer.js'
import TotalBox from './OrderDisplay/TotalBox.js'

export const TotalContext = createContext({
    total:0,
    'LargeLemonade': 0,
    'Regular Lemonade': 0,
    'LargePinkLemonade': 0,
    'RegularPink Lemonade': 0
});

export default function Wrapper() {
    const initialState = {
        orderName: '',
        orderEmail: '',
        orderPhone: '',
        total:0,
        'LargeLemonade': 0,
        'RegularLemonade': 0,
        'LargePink Lemonade': 0,
        'RegularPink Lemonade': 0
    };

    function reducer(state, action) {
        let orderType; 
        if (action.size === 'Regular') {
            orderType = action.flavor === 'Lemonade' ? 'RegularLemonade' : 'RegularPink Lemonade';
        } else if (action.size === 'Large') {
            orderType = action.flavor === 'Lemonade' ? 'LargeLemonade' : 'LargePink Lemonade';
        }
        switch(action.type) {
            case "PLUS": 
            return {
                ...state, 
                total: state.total + action.price,
                [orderType]: state[orderType] + 1
            };
            case "MINUS": 
            return {
                ...state,
                total: state[orderType] >= 1 ? (state.total - action.price) : state.total,
                [orderType]: state[orderType] > 1 ? (state[orderType] -1) : 0
            };
            case "CLEAR":
                return {
                    ...state,
                    total: state.total - (action.price * state[orderType]),
                    [orderType]: 0
                }
            default: return state;
        }
    }
   
    const [ state, dispatch ] = useReducer(reducer, initialState);

         return (<TotalContext.Provider value={{state, dispatch}}>
                    <div>
                    <ListContainer></ListContainer>
                    <TotalBox></TotalBox>
                    </div>
                    </TotalContext.Provider>
                );
}
