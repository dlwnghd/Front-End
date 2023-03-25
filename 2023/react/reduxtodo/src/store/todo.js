// 반찬을 담을 반찬통이라고 표현하심

import { createAction } from "utils/creatAction";

const initialState = [];

export const addTodo = createAction("ADD_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const updateTodo = createAction("UPDATE_TODO");

// 반찬통
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": // ⬇️...을 이용해 불변성을 지켜줌
      return [action.payload, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "UPDATE_TODO":
      const newTodo = [...state];
      const index = newTodo.findIndex((todo) => todo.id === action.payload.id);
      newTodo[index].content = action.payload.content;
      newTodo[index].state = action.payload.state;
      return newTodo;
    default:
      return state;
  }
};
export default reducer;
