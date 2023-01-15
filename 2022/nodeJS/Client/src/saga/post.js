import axios from "axios";
import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_ALLPOSTS_FAILURE,
  LOAD_ALLPOSTS_REQUEST,
  LOAD_ALLPOSTS_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "../reducer/post";

function allPostsAPI() {
  return axios.get("/post");
}

function* loadPosts(action) {
  try {
    const result = yield call(allPostsAPI);
    yield put({
      type: LOAD_ALLPOSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ALLPOSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/post", { content: data });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    //action.data.content(x)
    //action.data = contet(o)
    //content: data => 보내야 백엔드에 req.body.content로 전달됩니다.
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data.id}`); // /post/:postId
  // postId => data(삭제될 post의 id값)
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data, // result = 삭제된 post의 id 값이고 reducer에서 filter를 하기 위해 사용
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

// 업데이트 과제

function updateAPI(data) {
  return axios.patch(`/post/${data.postId}`, data);
}

function* updatePost(action) {
  try {
    const result = yield call(updateAPI, action.data);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//왜 data.PostId고 commentId인지 생각해보면서 해볼 것!!
//과제 꼭 하세요

//data.PostId와
//data.commentId를 이용하여 삭제 추가를 구현하세요

function addCommentAPI(data) {
  // /post/:postid/comment ==> rest api
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addCommnet(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function removeCommentAPI(data) {
  //post/:posdId/:commentId
  return axios.delete(`/post/${data.postId}/${data.commentId}`);
}

function* removeComment(action) {
  try {
    const result = yield call(removeCommentAPI, action.data);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addCommnet);
}

function* watchRemoveCommet() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchUpdatePost),
    fork(watchAddComment),
    fork(watchRemoveCommet),
  ]);
}
