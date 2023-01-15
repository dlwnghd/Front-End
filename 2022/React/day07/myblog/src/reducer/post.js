import produce from "immer" // 불변성을 지켜주는

const initialState = {
    allPosts:[
        {
            id:1,
            User: { 
                id:1,
                nickname: "이주홍"
            },
            content: "이주홍 취준생...",
            Comments: [
                {
                    id:1,
                    User: {
                        id:2,
                        nickname: "주황색"
                    },
                    content: "이름 비슷해서 들어와봤어요"
                }
            ]
        },
    ],
    // 로딩 상태에 따른 값을 넣어줄 변수 선언
    allPostsLoading: false,
    allPostsDone: false,
    allPostsError: null
}

// 액션 생성
export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS"
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE"

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case LOAD_ALLPOSTS_REQUEST:
                draft.allpostsLoaded = true;
                draft.allpostsDone = false;
                draft.allpostsError = null;
                break;
            case LOAD_ALLPOSTS_SUCCESS:
                draft.allpostsLoaded = false;
                draft.allpostsDone = true;
                draft.allPosts = action.data.concat(draft.allPosts);
                // draft.allpostsError = null;
                break;
            case LOAD_ALLPOSTS_FAILURE:
                draft.allpostsLoaded = false;
                draft.allpostsDone = false;
                draft.allpostsError = action.error;
                break;
        }
    })
}

export default reducer;