import TodoApi from "apis/todoApi";
import TodoCard from "./Card/Card";

function TodoList({ todoList }) {
  
//   /** Todo 업데이트 */
//   const handleUpdateTodo = async (id, content, state) => {
//     try{
//       const {data} = await TodoApi.updateTodo(id, {content, state});
//       const newTodoList = [...todoList];
//       const index = newTodoList.findIndex((todo) => todo.id === data.data.id);
//       newTodoList[index] = data.data;
//       setTodoList(newTodoList);
//     } catch (err) {
//       console.log(err);
//     }

//     // 아래는 내가 했었던 풀이
//     // return TodoApi.updateTodo(id, {content, state})
//     //   .then((res) => {
//     //     if (res.status === 200) {
//     //       setTodoList((prev) =>
//     //         prev.map((todo) =>
//     //           todo.id === res.data.data.id ? res.data.data : todo
//     //         )
//     //       );
//     //     }
//     //   })
//     //   .catch((err) => {
//     //     throw new Error(err);
//     //   });
//   };
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
      todoList.map((todo) => (
        <TodoCard
          todo={todo}
          example={"test"}
          // handleEdit={handleUpdateTodo}
          // onDelete={handleDeleteTodo}
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
