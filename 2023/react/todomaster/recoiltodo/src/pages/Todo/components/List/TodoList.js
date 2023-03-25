import TodoApi from "apis/todoApi";
import useGetTodo from "hooks/queries/todo/get-todo";
import useUpdateTodo from "hooks/queries/todo/update-todo";
import TodoCard from "./Card/Card";

function TodoList() {
  const { data: todoList, status, isLoading } = useGetTodo();
  const updateTodo = useUpdateTodo();
  
  //   /** Todo 업데이트 */
    const handleUpdateTodo = async (id, content, state) => {
      updateTodo.mutate({
        id, data: {
          content,
          state
        }
      })
    };

  /**
   * Todo의 id를 받아 일치하는 Todo를 삭제하는 비지니스 로직 함수
   */
  //   const handleDeleteTodo = async (id) => {
  //   if (window.confirm("정말 삭제하시겠습니까")) {
  //     const {data} = await TodoApi.deleteTodo(id);
  //     setTodoList(todoList.filter((todo) => todo.id !== data.data));
  //     // try {
  //     //   await TodoApi.deleteTodo(id);
  //     //   setTodoList(todoList.filter((todo) => todo.id !== id));
  //     // } catch (error) {
  //     //   console.error(error);
  //     // }
  //   }
  // };

  return (
    <div>
      {/* {TODO_LIST.map((todo) => <TodoCard/>)} */}
      {todoList &&
        todoList.data.data
          .map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              example={"test"}
              handleEdit={handleUpdateTodo}
              // onDelete={handleDeleteTodo}
            />
          ))
          .reverse()}
      {/*
        상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
        props(속성)을/를 이용하여 데이터를 전달 
        */}
    </div>
  );
}
export default TodoList;
