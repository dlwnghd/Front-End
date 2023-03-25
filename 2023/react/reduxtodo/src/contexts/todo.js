const { useReducer } = require("react"); // 전역에서 상태값을 변경하는 비지니스로직을 가진 함수
const { createContext } = require("vm"); // 전역에서 상태를 전달해주는 함수

// 저장될 빈 배열
const initialState = [];

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
const TodoListContext = createContext();
const TodoDispatchContext = createContext();

// Reducer 생성
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // 받아온 배열값 전체를 넣어줌
      return [action.payload, ...state];
    case "DELETE_TODO":
      // 삭제할 배열의 번호만 넣어줌
      return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      const newTodo = [...state];
      const todoIndex = newTodo.findIndex(
        (todo) => todo.id === action.payload.id
      );

      newTodo[todoIndex].content = action.payload.content;
      newTodo[todoIndex].state = action.payload.state;

      return newTodo;
    default:
      return;
  }
};

//                        ⬇️ 하위에 있는 모드 컴포넌트
const TodoProvider = ({ children }) => {
  // useReducer 사용
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoListContext.Provider value={todoList}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
      {/*         App.js에있는 하위 컴포넌트에 children을 보냄*/}
    </TodoListContext.Provider>
  );
};
export default TodoProvider;
