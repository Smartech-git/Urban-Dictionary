import React, { createContext, useContext, useReducer} from "react";

const WordContext = createContext();

export const  StateProvider = ({ reducer, initialState, children}) => (
    <WordContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </WordContext.Provider>
);

export const useStateValue = () => useContext(WordContext);