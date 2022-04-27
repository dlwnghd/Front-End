import React from 'react';

const TodoList = ( {state} ) => {
    console.log(state);
    
    return(
        <div>{state.id}. {state.Todo} <button>완료</button> </div>
    )
}
export default TodoList;