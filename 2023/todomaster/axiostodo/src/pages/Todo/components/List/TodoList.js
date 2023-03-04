import TodoApi from "apis/todoApi";
import TodoCard from "./Card/Card";

function TodoList({ todoList, setTodoList }) {
  
  const handleUpdateTodo = (id, content, state) => {
    return TodoApi.updateTodo(id, content, state)
      .then((res) => {
        if (res.status === 200) {
          setTodoList((prev) =>
            prev.map((todo) =>
              todo.id === res.data.data.id ? res.data.data : todo
            )
          );
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };



  const handleDeleteTodo = async (id) => {
  if (window.confirm("정말 삭제하시겠습니까")) {
    try {
      await TodoApi.deleteTodo(id);
      setTodoList(todoList.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  }
};


  return (
    <div>
      {/* {TODO_LIST.map((todo) => <TodoCard/>)} */}
      {todoList.map((todo) => (
        <TodoCard
          todo={todo}
          example={"test"}
          handleEdit={handleUpdateTodo}
          onDelete={handleDeleteTodo}
        />
      )).reverse()}
      {/*
        상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
        props(속성)을/를 이용하여 데이터를 전달 
        */}
    </div>
  );
}
export default TodoList;
