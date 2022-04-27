import React, { useReducer } from "react";

export const Context = React.createContext();
// context 사용 하기 위해 선언하는 부분

const initialState = [
    {
        id: 1,
        name: "김사과",
    },
    {
        id:2,
        name: "반하나",
    },
    {
        id:3,
        name: "오렌지"
    }
]

const reducer = (state, action) =>{
    switch(action.type){
        case "INSERTSTATE":
            return [...state, {id: action.id, name: action.name}]
        case "REMOVESTATE":
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Context.Provider value={ {state, dispatch}}> {children} </Context.Provider>
    )
}
export default ContextProvider

