import React, {useState} from "react";
import AddState from "./addState";


const State = () => {
    //const [state, setState] = useState("state 처음 시작")
    // const [변수명, 변수 값을 바꿔줄 함수명] = useState(변수의 기본값)

    const [state, setState] = useState([
        {
            id: 1,
            name: "김사과"
        },
        {
            id: 2,
            name: "반하나"
        },
        {
            id: 3,
            name: "이멜론"
        },

    ])

    // state를 set해주는 함수
    const onClickEvent = (idvalue, namevalue) => { // idvalue와 namevalue를 매개변수로 받음
        setState([...state, {id: idvalue, name: namevalue}])
    }

    /*
    state의 불변성

    const obj = {}
    const obj2 = {} // obj === obj2 (false)

    const obj3 = obj // obj와 같은 참조 값을 가진다

    따라서 obj가 가지고 있는 객체 값이 변경되면 obj도 같은 객체를 가지기 때문에 값이 변경된다
    즉, 데이터의 원본이 훼손된다. 이러한 훼손은 예상치 못한 오류와 버그를 발생
    
    
    < 얕은 복사의 에러를 막기 위해 깊은 복사 실현하는 방법 >
    1. spread operator (...)

    2. immer.js
        (...) => 코드가 길어지고 불편하기 때문에 한번에 해결해줄게 하고 만들어진 라이브러리
        draft.state = 변경된 스테이트값 (draft가 알아서 지켜줌)
    */

    const onRemove = (e) =>{
        console.log(typeof e.target.value);
        // 매우 중요, 작동하지 않을 시 type을 찍어보는 것
        const removeState = state.filter( (item) => item.id !== parseInt(e.target.value));
        setState(removeState);
        // map = 반복, filter = 거르다
    }

    return (
        <>
            {state.map((item)=>(
                // div 반복
                <div key={item.id}>
                    {item.id}. {item.name}
                    <button value={item.id} onClick={onRemove}>삭제</button>
                </div>
            ))}
            <AddState onClickEvent={onClickEvent} stateId={state.length > 0 && state[state.length -1].id}/>
        </>
    )
}
export default State;