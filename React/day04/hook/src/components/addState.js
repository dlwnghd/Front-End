import React, {useState, useRef} from "react";

const AddState = ({onClickEvent, stateId}) => {

    const [name, setName] = useState("");

    const userName = useRef();

    // setName을 사용하기 위해 onChangeEvent를 생성
    const onChangeEvent = (e/*e : 자기자신을 객체로 받는 함수*/) => {
        setName(e.target.value)
    }

    // Id를 추가하는 onAddState
    const onAddState = () => {
        onClickEvent(stateId + 1, name);
        setName("");
    }

    // 초기화 해주는 onReset
    const onReset = () => {
        setName("");
        userName
            .current
            .focus(); // userNmae에 접근해서 focus(클릭상태)를 맞춰준다
        console.log(userName.current);
    }

    return (
        <> < input type = "text" placeholder = "이름을 입력하세요" value = {
            name
        }
        // onChange는 내부 값이 변경될때 마다 실행시키는 이벤트
        onChange = {
            onChangeEvent
        }
        // input의 돔 객체를 userName이란 이름으로 가져올 수 있음
        ref = {
            userName
        } /> <button onClick={onAddState}>추가</button>
        <button onClick={onReset}>초기화</button>
    </>
    )
}

export default AddState;