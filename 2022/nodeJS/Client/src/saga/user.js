import axios from "axios";
import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../reducer/user";

function loginAPI(data) {
  return axios.post("/user/login", data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post("/user/logout");
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signinAPI(data) {
  return axios.post("/user", data);
}

function* signin(action) {
  try {
    yield call(signinAPI, action.data); //signinAPI(action.data);
    yield put({
      type: SIGN_IN_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSingin() {
  yield takeLatest(SIGN_IN_REQUEST, signin);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSingin)]);
}
