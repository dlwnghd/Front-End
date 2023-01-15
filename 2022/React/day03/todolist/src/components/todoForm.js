// 외부에서 받아올 모듈
import React from 'react';
import styled from "styled-components";

const TodoaddInput = styled.input`  // 할일 input 스타일
    border-radius:5px;
    width: 500px;
    font-size:2rem;
    position: relative;
    padding-left: 20px;
`

const TodoButton = styled.button`   // 할일 추가 버튼 스타일
    border-radius: 5px;
    width: 53px;
    height: 43px;
    vertical-align: middle;
    position: absolute;
`

const TodoForm = () => {
    return(
        <div>
            <TodoaddInput type="text" placeholder="할 일을 적어주세요"/>
            <TodoButton>추가</TodoButton>
        </div>
    )
}
export default TodoForm;    // TodoForm을 기본적으로 내보내겠다.