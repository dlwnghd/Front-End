const { useReducer } = require("react");
const { createContext } = require("vm");

// 저장될 리스트
const initialState = [];

// 저장공간 만들기
const TodoListContext = createContext();
const TodoDispatchContext = createContext();

// Reducer 생성
const todoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return [action.payload, ...state];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload.id);
        case "UPDATE_TODO":
            
        const newTodo = [...state];
        const todoIndex = newTodo.findIndex((todo) => todo.id === action.payload.id);
        
        newTodo[todoIndex].content = action.payload.content;
        newTodo[todoIndex].state = action.payload.state;
        
            return newTodo;
        default:
            return;
    }
}

//                        ⬇️ 하위에 있는 모드 컴포넌트
const TodoProvider = ({children}) => {
    const [todoList, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoListContext.Provider value={todoList}>
            <TodoDispatchContext value={dispatch}>
                {children}
            </TodoDispatchContext>
        </TodoListContext.Provider>

    )
}
export default TodoProvider;