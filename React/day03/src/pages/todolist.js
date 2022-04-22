import React from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

const Todos = () => {

    let state = [
        {
            id: 1,
            Todo: "리엑트 공부하기"
        },
        {
            id: 2,
            Todo: "리엑트 또 공부하기"
        }
    ]

    return (
        <>
            <TodoTitle count={state.length}/>
            <TodoForm/>
            {state.map((item) => (
                <TodoList key={item.id} state={item}/>
            ))}
        </>
    );
}
export default Todos;