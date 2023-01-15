import React, { useEffect, useReducer } from "react";
import { reducerState } from "../reducer";
import AddState from "./addState";




const ReducerState = () => {

const initialState = [
    {
        id:1,
        name: "김사과",
    },
    {
        id:2,
        name: "반하나",
    },
    {
        id:3,
        name: "두리안",
    }
]

//useReducer(리듀서명, state)
const [state, dispatch] = useReducer( reducerState , initialState);

const onAddState = (id,name) =>{
    dispatch({
        type:"INSERTSTATE",
        id: id, 
        name: name 
    })
}

const onRemove = (e) => {
    console.log(typeof e.target.value)
    dispatch({
        type:"REMOVESTATE",
        id: parseInt(e.target.value)
    })
}

useEffect(()=>{
    alert("state 값이 변경되었습니다")
},[state])

    return(
        <>
            {state.map((p) => (
                    <div key={p.id}>
                        {p.id}. {p.name}
                        <button value={p.id} onClick={onRemove}>삭제</button>
                    </div>
            ))}
            <AddState onAddState={onAddState} id={state[state.length-1].id}/>
        </>
    )
}  
export default ReducerState 