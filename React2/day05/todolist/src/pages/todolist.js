import React, { useCallback, useState } from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
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
        },
      ]);

      const onAddhandler = useCallback(
        (id, Todo) => {
          setState([...state, { id: id, Todo: Todo }]);
        },
        [state]
      );

      const onRemovehandler = useCallback(
          (id) => {
              const remove = state.filter( (item) => item.id !== id )
              setState(remove);
          },
          [state])

          const onOpenModal = useCallback(()=>{
              setOpen( (prev) => !prev )
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
            {open && <Modal/> }
            <button onClick={onOpenModal}>모달</button>
        </>
    );
}
export default Todos;