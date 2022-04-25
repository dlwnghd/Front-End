import React from 'react';

const TodoList = ( {state} ) => {
    return(
        // 파라미터로 들고옴
        <div>{state.id}. 리액트 공부하기 <button>완료</button> </div>
    )
}
export default TodoList;