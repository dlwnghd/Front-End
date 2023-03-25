import AuthApi from "apis/authApi";
import axios from "axios";
import Button from "components/Button/Button";
import { useAuth } from "contexts/auth";
import useInput from "hooks/useInput";
import useInputs from "hooks/useInputs";
import useUserLogin from "hooks/queries/auth/user-login";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TokenService from "repository/TokenService";
import * as S from "../style";

function LoginForm() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { state } = useLocation();

  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });

  // mutation
  const { mutate } = useUserLogin({ email, password });

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      mutate({ email, password });
    } catch (err) {
      console.error(err);
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  /*access_token이 있다면 로그인 페이지 접근을 막고 todo 페이지로 이동 */
  useEffect(() => {
    if (auth.accessToken) return navigate("/todo");
  }, []);

  /**해당 로직은 필수가 아니라 어떻게 로그아웃 후 처리를 할 건지 설계에 따라 달라짐*/
  useEffect(() => {
    if (!auth.accessToken) return;
    if (!state) return navigate("/todo");

    // state에 from객체로 보내줌
    navigate(state.from);
  }, [auth]);

  /*
    1. 관심사분리 axios를 하나의 service 파일로 만들 것
    2. axios.interceptor access_token을 넣어줄 것 (header)
    3. locked access_token이 없으면 todo 요청 불가
    4. 관심사분리 localstorage --> 하나의 service 파일로 만들 것
    5. error handleing, error boundary
    6. eslint, prettier
    7. suspense ==> skeleton UI
  */

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name="email" onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChangeForm}
        />
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={"primary"} hover={"test2"} size={"full"}>
        로그인
      </Button>
    </S.Form>
  );
}
export default LoginForm;
