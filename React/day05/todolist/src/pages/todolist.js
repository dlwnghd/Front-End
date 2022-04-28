import React, { useCallback, useState } from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
// Modal import
import Modal from "../components/modal/modal";

const Todos = () => {

    const [open, setOpen] = useState(false);

    const [state, setState] = useState([
        {
          id: 1,
          Todo: "리엑트 공부하기",
        },
        {
          id: 2,
          Todo: "리엑트 또 공부하기",
        }
      ]);

    const onAddhandler = useCallback((id, Todo) => {
        setState([...state, { id: id, Todo: Todo }]);
      },
      [state]
    );

    // 삭제 핸들러
    const onRemovehandler = useCallback(
        (id) => {
            const remove = state.filter( (item) => item.id !== id )
            setState(remove);
        },[state])

        // 모달 열기
    const onOpenModal = useCallback(()=>{
        setOpen( (prev) => !prev )  // setOpen에 담겨있는 값이 반대로 되게 설정 : false => true
    },[])

    return (
        <>
            <TodoTitle count={state.length}/>
            <TodoForm
                onAddhandler={onAddhandler} id={state.length > 0 && state[state.length - 1].id}
            />
            {state.map((item) => (
                <TodoList key={item.id} state={item} onRemovehandler={onRemovehandler}/>
            ))}
            {/* open의 값이 true여야만 Modal창이 보임 */}
            {open && <Modal/> }
            <button onClick={onOpenModal}>모달</button>
        </>
    );
}
export default Todos;