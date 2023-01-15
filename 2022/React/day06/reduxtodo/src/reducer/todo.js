//리덕스를 생성하는 과정
// 상태 값 정의
// 액션의 타입명을, action.type
// reducer처럼 해결하는 로직을 작성

const initialState = [
    {
        id:1,
        todo: "리엑트 공부하기"
    },
    {
        id:2,
        todo: "리엑트 또 공부하기"
    }
]

// 자동 임포트를 통한 오타 방지
export const INSERT_TODO = "INSERT_TODO";

const todo = (state = initialState, action) => {
    switch (action.type){
        case INSERT_TODO:
            return state.concat({id:action.data.id, todo: action.data.todo})
        default:
            return state;
    }
}

export default todo;