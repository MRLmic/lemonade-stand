import React, {createContext, useReducer} from 'react';
import ListContainer from './ListContainer.js'
import TotalBox from './TotalBox.js'

export const TotalContext = createContext({total:0});

export default function Wrapper() {
    const initialState = {total:0};
    const PLUS = "PLUS";
    const MINUS = "MINUS";

    function reducer(state, action) {
        switch(action.type) {
            case "PLUS": return {
                ...state, total: state.total + 1
            };
            case "MINUS": return {
                ...state, total: state.total - 1
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
