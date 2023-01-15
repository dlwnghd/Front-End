import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";
import axios from "axios";

// 백엔드와 통신을 할건데
// url을 매번 적을 수 없으니까 url을 미리 적어놓는겁니다.
axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
