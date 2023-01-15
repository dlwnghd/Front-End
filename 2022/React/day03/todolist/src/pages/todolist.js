// 외부에서 받아올 모듈들
import React from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm"
import Todolist from "../components/todoList"

// Todos 컴포넌트
const Todos = () => {

    let state = [   // state선언
        {
            id: 1,
            Todo: "리액트 공부하기"
        },
        {
            id: 2,
            Todo: "리액트 또 공부하기"
        }
    ]


    return (
        <>
            {/* 컴포넌트 1 */}
            <TodoTitle count={state.length}/>

            {/* 컴포넌트 2 */}
            <TodoForm/>
            {state.map((item) => (
                // 컴포넌트 3
                <Todolist key={item.id} state={item}/>
            ))}
            
        </>
    );
}

// 바깥에서 Todos라는 이름으로 컴포넌트를 사용하겠다.
export default Todos;   // Todos 모듈을 기본으로 내보내겠다