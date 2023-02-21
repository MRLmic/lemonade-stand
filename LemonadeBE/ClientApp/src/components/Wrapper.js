import React, {useState, createContext, useReducer} from 'react';
import ListContainer from './ListContainer.js'
import TotalBox from './TotalBox.js'

export const TotalContext = createContext({total:0});

export default function Wrapper() {
    const initialState = {total:0};
    const [total, setTotal] = useState(initialState);


    const reducer = (state, action) => {
        switch(action.type) {
            case "PLUS": return {
                ...state,
                total: total + 1
            };
            case "MINUS": return {
                ...state,
                total: total - 1
            };
            default: return state;
        }
    }
    const [ state, dispatch ] = useReducer(reducer, initialState);

         return (<TotalContext.Provider value={total}>
                    <div>
                    <ListContainer></ListContainer>
                    <TotalBox></TotalBox>
                    </div>
                    </TotalContext.Provider>
                );
}
