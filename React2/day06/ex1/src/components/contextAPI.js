import React, { useContext, useEffect } from "react";
import AddState from "./addState";
import { Context } from "../reducer";

const ContextAPI = () => {

const {state, dispatch} = useContext(Context);

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
            <AddState/>
        </>
    )
}  
export default ContextAPI