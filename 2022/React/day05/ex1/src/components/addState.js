import React, { useState, useRef } from "react";


const AddState = ( {onAddState, id} ) => {

    const [name, setName] = useState("");
    const nameRef = useRef();

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onReset = () => {
        setName("");
        nameRef.current.focus();
    }

    return (
        <>                            
            <input type="text" value={name} onChange={onChangeName}/>
            <button onClick={()=>onAddState(id+1, name)}>추가</button>
            <button onClick={onReset}>초기화</button>
        </>
    )
}
export default AddState
