// 외부에서 받아올 모듈
import React from 'react';

const TodoList = ( {state} ) => {
    // console.log(state);
    
    return(
        <div>{state.id}. {state.Todo} <button>완료</button> </div>
    )
}
export default TodoList;    // TodoList를 기본적으로 내보내겠다.