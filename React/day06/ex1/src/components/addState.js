import React, { useState, useRef, useContext } from "react";
import { Context } from "../reducer";


const AddState = () => {

    const [name, setName] = useState("");
    const nameRef = useRef();
    const {state, dispatch} = useContext(Context);

    
    const onAddState = () =>{
        dispatch({
            type:"INSERTSTATE",
            id: state[state.length -1].id + 1, 
            name: name 
        })
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onReset = () => {
        setName("");
        nameRef.current.focus();
    }

    return (
        <>                            
            <input type="text" value={name} onChange={onChangeName} ref={nameRef}/>
            <button onClick={onAddState}>추가</button>
            <button onClick={onReset}>초기화</button>
        </>
    )
}
export default AddState