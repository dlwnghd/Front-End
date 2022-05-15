import { all, delay, fork, takeLatest, put } from "redux-saga/effects";
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
import { dummyUser } from "../reducer/user";

function* login(action) {
  try {
    yield delay(1000); //백엔드와 통신하는 시간을 가상으로 재현
    //const result = yeild call(LoginAPI, action.data)
    yield put({
      type: LOG_IN_SUCCESS,
      data: dummyUser(action.data),
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logout() {
  try {
    yield delay(1000);
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

function* signin() {
  try {
    yield delay(1000);
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
