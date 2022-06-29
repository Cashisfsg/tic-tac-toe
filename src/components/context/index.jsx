import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "./context";

const Context = React.createContext();

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const value = {
        isBot: state.isBot,
        changeState: () => {
            dispatch({type: "update"})
        }
    }

    return <Context.Provider value = {value}>{children}</Context.Provider>

}

export {Context, Provider};