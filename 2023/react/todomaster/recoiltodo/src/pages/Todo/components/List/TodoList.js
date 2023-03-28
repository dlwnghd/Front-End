import TodoApi from "apis/todoApi";
import useDeleteTodo from "hooks/queries/todo/delete-todo";
import useGetTodo from "hooks/queries/todo/get-todo";
import useUpdateTodo from "hooks/queries/todo/update-todo";
import TodoCard from "./Card/Card";

function TodoList() {
  const { data: todoList, status, isLoading } = useGetTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  /** Todo 업데이트 */
  const handleUpdateTodo = async (id, content, state) => {
    updateTodo.mutate({
      id,
      data: {
        content,
        state,
      },
    });
  };

  /** Todo 삭제 */
  const handleDeleteTodo = async (id) => {
    deleteTodo.mutate({
      id,
    });
  };

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
              onDelete={handleDeleteTodo}
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
