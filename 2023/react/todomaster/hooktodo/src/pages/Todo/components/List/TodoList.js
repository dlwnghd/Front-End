import TodoCard from "./Card/Card";

function TodoList({ todoList, setTodoList }) {
  
  const handleUpdateTodo = (id, content, state) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === id);
    todo.content = content;
    todo.state = state;
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      const deleteTodoList = todoList.filter((todo) => todo.id !== id);
      /* 새로운 배열을 반환하는 메소드는 이미 불변성을 지키고 있기 때문에 불변성을 지킬 필요가 없다 */
      setTodoList(deleteTodoList);
    }
  };

  return (
    <div>
      {/* {TODO_LIST.map((todo) => <TodoCard/>)} */}
      {todoList.map((todo) => {
        console.log(todo);
        return (
          <TodoCard
            todo={todo}
            example={"test"}
            handleEdit={handleUpdateTodo}
            onDelete={handleDeleteTodo}
          />
        );
      })}
      {/*
        상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
        props(속성)을/를 이용하여 데이터를 전달 
        */}
    </div>
  );
}
export default TodoList;
