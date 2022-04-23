import React, { useCallback } from "react";

const TodoList = ({state, onRemovehandler}) => {


    const onRemove = useCallback(()=>{
        onRemovehandler(state.id)
    },[state.id, onRemovehandler])

    return(
        <div>{state.id}. {state.Todo} <button onClick={onRemove}>완료</button> </div>
    )
}
export default TodoList;