import produce from "immer"; // 불변성
import faker from "@faker-js/faker"; // 더미데이터 생성
import shortId from "shortid"; //임의 ID 생성

const initialState = {
  allPosts: [],
  allpostsLoading: false,
  allpostsDone: false,
  allpostsError: null,

  addpostLoading: false,
  addpostDone: false,
  addpostError: null,

  removepostLoading: false,
  removepostDone: false,
  removepostError: null,

  updatepostLoading: false,
  updatepostDone: false,
  updatepostError: null,

  addcommentLoading: false,
  addcommentDone: false,
  addcommentError: null,

  removecommentLoading: false,
  removecommentDone: false,
  removecommentError: null,
};

export const createDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

export const dummyPost = (data) => ({
  //data = action.data
  id: shortId.generate(),
  User: {
    id: 1,
    //action.data.id
    nickname: "김성용",
    //action.data.nick
  },
  content: data,
  //action.data
  Comments: [],
});

export const dummyComment = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    nickname: "김성용",
  },
  content: data,
  //action.data.content
});

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const REMOVE_COMMENT_REQUEST = "REMOVE_COMMENT_REQUEST";
export const REMOVE_COMMENT_SUCCESS = "REMOVE_COMMENT_SUCCESS";
export const REMOVE_COMMENT_FAILURE = "REMOVE_COMMENT_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ALLPOSTS_REQUEST:
        draft.allpostsLoading = true;
        draft.allpostsDone = false;
        draft.allpostsError = null;
        break;
      case LOAD_ALLPOSTS_SUCCESS:
        draft.allpostsLoading = false;
        draft.allpostsDone = true;
        draft.allPosts = action.data.concat(draft.allPosts);
        break;
      case LOAD_ALLPOSTS_FAILURE:
        draft.allpostsLoading = false;
        draft.allpostsDone = false;
        draft.allpostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addpostLoading = true;
        draft.addpostDone = false;
        draft.addpostError = null;
        break;
      //
      case ADD_POST_SUCCESS:
        draft.addpostLoading = false;
        draft.addpostDone = true;
        draft.allPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addpostLoading = false;
        draft.addpostDone = false;
        draft.addpostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removepostLoading = true;
        draft.removepostDone = false;
        draft.removepostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removepostLoading = false;
        draft.removepostDone = true;
        draft.allPosts = draft.allPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_POST_FAILURE:
        draft.removepostLoading = false;
        draft.removepostDone = false;
        draft.removepostError = action.error;
        break;

      case UPDATE_POST_REQUEST:
        draft.updatepostLoading = true;
        draft.updatepostDone = false;
        draft.updatepostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatepostLoading = false;
        draft.updatepostDone = true;
        draft.allPosts.find((v) => v.id === action.data.postId).content =
          action.data.content;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatepostLoading = false;
        draft.updatepostDone = false;
        draft.updatepostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addcommentLoading = true;
        draft.addcommentDone = false;
        draft.addcommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        console.log(action.data);
        draft.addcommentLoading = false;
        draft.addcommentDone = true;
        const post = draft.allPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        break;

      case ADD_COMMENT_FAILURE:
        draft.addcommentLoading = false;
        draft.addcommentDone = false;
        draft.addcommentError = action.error;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removecommentLoading = true;
        draft.removecommentDone = false;
        draft.removecommentError = null;
        break;
      case REMOVE_COMMENT_SUCCESS:
        draft.removecommentLoading = false;
        draft.removecommentDone = true;
        draft.allPosts.find((v) => v.id === action.data.postId).Comments =
          draft.allPosts
            .find((v) => v.id === action.data.postId)
            .Comments.filter((v) => v.id !== action.data.commentId);
        // postId = 사용자가 삭제하고자 하는 게시글
        // commentId = 사용자가 삭제하고자 하는 댓글

        // 1. 게시글들 중에 사용자가 삭제하고하는 게시글 찾아
        // 2. 그 게시글의 댓글 상태를 바꿔라(=)
        // 3. 사용자가 삭제하고자하는 게시글의 댓글에서 사용자가
        //    삭제하고자 하는 댓글을 제외한(거른) 상태로

        break;
      case REMOVE_COMMENT_FAILURE:
        draft.removecommentLoading = false;
        draft.removecommentDone = false;
        draft.removecommentError = action.error;
        break;
      default:
        return state;
    }
  });
};
export default reducer;
