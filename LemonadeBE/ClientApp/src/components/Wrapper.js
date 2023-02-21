import React, {createContext, useReducer} from 'react';
import ListContainer from './ListContainer.js'
import TotalBox from './TotalBox.js'

export const TotalContext = createContext({
    total:0,
    'LargeLemonade': 0,
    'RegularLemonade': 0,
    'LargePinkLemonade': 0,
    'RegularPinkLemonade': 0
});

export default function Wrapper() {
    const initialState = {
        total:0,
        'LargeLemonade': 0,
        'RegularLemonade': 0,
        'LargePink Lemonade': 0,
        'RegularPink Lemonade': 0
    };
    const PLUS = "PLUS";
    const MINUS = "MINUS";

    function reducer(state, action) {
        console.log(action.size)   
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
            case "MINUS": return {
                ...state,
                total: state.total + action.price,
                [orderType]: state[orderType] - 1
            };
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
