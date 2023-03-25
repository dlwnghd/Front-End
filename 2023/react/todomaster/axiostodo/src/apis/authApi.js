// 객체안에 함수가 있다면 메소드
// Axios라는 관심사를 분리했다.

import { Axios } from "./core";

/**
 * 실무에서 만약에 기획단계에서 url의 경로가 바뀌었을 경우 여기를 1차적으로 수정하면 나머지 경로도 한번의 수정으로 모두 포함이 됨
 */
const PATH = "/user";

const AuthApi = {
  /**
   * 로그인 API
   * @param {string} email - 이메일
   * @param {string} password - 비밀번호
   * @returns 사용자 정보가 암호화 되어있는 토큰
   */
  async login(email, password) {
    const res = await Axios.post(PATH + "/login", { email, password });
    return res.data;
  },
  /**
   * 회원가입 API
   * @param {string} email - 이메일
   * @param {string} password - 비밀번호
   * @returns 사용자 정보가 암호화 되어있는 토큰
   */
  signup(email, password) {
    return Axios.post(PATH + "/sign", { email, password });
  },

  /**
   * 로그아웃 API
   * @return Axios의 logout경로를 돌려줌
   */
  async logout() {
    const res = await Axios.post(PATH + "/logout");
    return res.data;
  },
};

/*
    이 페이지를 제작하기 위한 api 정리

    1. axios.get("/todo")   // return 값 ---> todolist

        axios.post("/todo", {content, title}) ---> {todo}

        axios.put("/todo/$id", {content, state}) ---> {update todo}

        axios.delete("/todo/$id") ---> id

    2. 사용자가 todo페이지에 접속했습니다
        페이지에게 어떤 것이 랜더링 되어야하나요? --- todoList --- axios.get
        todoList는 state로 관리되어야할까요? ----> state로 관리 ----> useState

        화면이 랜더링 될 때마다 axios 새로 가지고 와야할까?
        axios를 사용해야할 타이밍 ---> 페이지가 처음 열렸을 때 ---> useEffect

    .....
*/

export default AuthApi;
