import React from "react";

const TodoList = () => {

    let state = [
        {
            id: 1,
            Todo: "리액트 공부하기"
        },
        {
            id: 2,
            Todo: "리액트 또 공부하기"
        }
    ]
    return(
        <div>1. 리엑트 공부하기 <button>완료</button> </div>
    )
}
export default TodoList;