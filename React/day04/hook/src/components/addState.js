import React, { useState, useRef } from "react";

const AddState = ( {onClickEvent, stateId} ) => {

    const [name, setName] = useState("");
    const userName = useRef();

    const onChangeEvent = (e) => {
        setName(e.target.value)
    }

    const onAddState = () => {
        onClickEvent( stateId + 1, name );
        setName("");
    }

    const onReset = () => {
        setName("");
        userName.current.focus();
        console.log(userName.current);
    }


    return (
        <>
            <input 
            type="text" 
            placeholder="이름을 입력하세요" 
            value={name}
            onChange={onChangeEvent}
            ref={userName}
            />
            <button onClick={onAddState}>추가</button>
            <button onClick={onReset}>초기화</button>
        </>
    )
}
export default AddState;