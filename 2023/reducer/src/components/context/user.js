import { createContext, useContext, useReducer, useState } from "react";
import { createAction } from "../../utils/createAction";

// 전역 상태에서 관리하고 싶은 state
const initialState = [
    {
        id: 1,
        name: "김성용"
    }, {
        id: 2,
        name: "구현서"
    }, {
        id: 3,
        name: "김태기"
    }, {
        id: 4,
        name: "김민식"
    }
];

export const UserContext = createContext();
export const UserDisPatchContext = createContext();

// 전역 저장소를 만들겠다
export const useUserState = () => useContext(UserContext)
export const useUserDisPatch = () =>  useContext(UserDisPatchContext); // 새로운 저장소를 만듬

export const ADD_STATE = createAction('ADD_STATE');
export const REMOVE_STATE = createAction('REMOVE_STATE');

// reducer
const userListReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STATE':
            return [...state, { id:action.payload.id, name : action.payload.name}];
        case 'REMOVE_STATE':
            return state.filter((user) => user.id !== action.payload.id);
        default:
            return;
    }
};

const ContextProvider = ({ children }) => {
    // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(userListReducer, initialState);

    return (
      <UserContext.Provider value={state}>
        <UserDisPatchContext.Provider
          value={dispatch}
        >
          {children}
        </UserDisPatchContext.Provider>
      </UserContext.Provider>
    );
};
export default ContextProvider;