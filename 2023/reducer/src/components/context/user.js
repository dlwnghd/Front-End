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

// 전역 저장소를 만들겠다
export const UserContext = createContext();

// Dispatch를 보내기 위한 Context
export const UserDisPatchContext = createContext();

export const useUserState = () => useContext(UserContext)
export const useUserDisPatch = () =>  useContext(UserDisPatchContext); // 새로운 저장소를 만듬

export const ADD_STATE = createAction('ADD_STATE');
export const REMOVE_STATE = createAction('REMOVE_STATE');

// reducer
const userListReducer = (state, action) => {
    switch (action.type) {
        // ⚠️case에 함수 ADD_STATE 넣지 않도록 주의⚠️
        case 'ADD_STATE':
            return [...state, { id:action.payload.id, name : action.payload.name}];
        case 'REMOVE_STATE':
            return state.filter((user) => user.id !== action.payload.id);
        default:
            return;
    }
};

const ContextProvider = ({ children }) => {

    // useState 방식
    // const [state, setState] = useState(initialState);
    
    // useReducer 방식
    const [state, dispatch] = useReducer(userListReducer, initialState);

    return (
      <UserContext.Provider value={state}>
        {/* value={[state, dispatch || setState ]} ⬅️ 옆과 같이 배열로 전달해도 괜찮지만 Redux 환경과 최대한 비슷하게 하기 위해 DispatchContext를 만듬*/}
        <UserDisPatchContext.Provider value={dispatch}>
          {children}
        </UserDisPatchContext.Provider>
      </UserContext.Provider>
    );
};
export default ContextProvider;