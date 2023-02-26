import axios from "axios";
import Button from "components/Button/Button";
import useInput from "hooks/useInput";
import useInputs from "hooks/useInputs";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";

function LoginForm() {
  const navigate = useNavigate();
  // const [email, onChangeEmail, setEmail] = useInput('');
  // const [password, onChangePassword, setPassword] = useState('');

  // react-hook-form, zod 를 썻으면 좋겠지만 나중에...

  // // useRef
  // const email = useRef();
  // const password = useRef();

  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      /* env는 수정 후 서버를 종료 후 다시 빌드 해야함 */
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/user/login",
        {
          email,
          password,
        }
      );

      const { data } = res.data;

      localStorage.setItem("access_token", data.token);
      if (localStorage.getItem("access_token")) {
        navigate("/todo");
      }
    } catch (err) {
      console.error(err);
      return alert("아이디와 비밀번호를 확인해주세요");
    }
  };

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
