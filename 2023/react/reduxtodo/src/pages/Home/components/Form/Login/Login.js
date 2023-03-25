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

  const [{email, password}, onChangeForm] = useInputs({
    email: '',
    password:'',
  });

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if(email === 'test@test.com' && password === 'testtest') {
      return navigate('/todo');
    }
    return alert('아이디와 비밀번호를 확인해주세요');
  };

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name='email' onChange={onChangeForm} />
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