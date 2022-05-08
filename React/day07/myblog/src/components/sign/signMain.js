import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInput } from "../../hook/useInput";

const SignMain = () => {
  const [email, onChangeUserEmail] = useInput("");
  const [name, onChangeUserName] = useInput("");
  const [password, onChangeUserPasswrod] = useInput("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const onChangeConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
      setPasswordCheck(e.target.value !== password);
    },
    [password]
  );

  return (
    <>
      <SignFrom>
        <h1>회원가입</h1>
        <div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            value={email}
            onChange={onChangeUserEmail}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            autoComplete="off"
            value={name}
            onChange={onChangeUserName}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            value={password}
            onChange={onChangeUserPasswrod}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>
        {confirmPassword && passwordCheck && (
          <CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>
        )}
        <button>가입하기</button>
        <Link to="/">돌아가기</Link>
      </SignFrom>
    </>
  );
};
export default SignMain;

const SignFrom = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  max-height: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: #4f5681;
  }

  & input {
    box-sizing: border-box;
    width: 50%;
    margin: 0.1rem 0;
    padding: 0.35rem;
    border: 1px solid #ddd;
    font-size: 0.875rem;
    color: #666;
  }

  & input::placeholder {
    font-size: 0.875rem;
    color: #ccc;
  }

  & input:focus {
    outline: none;
    border: 1px solid #7784cc;
    box-shadow: 0 0 0 0.1rem rgb(59 65 99 / 25%);
  }

  & button {
    box-sizing: border-box;
    width: 50%;
    margin: 0.2rem;
    padding: 0.3rem 0;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background: #4f5681;
    cursor: pointer;
  }

  & button:hover {
    background: #3b4163;
  }

  & a {
    display: block;
    font-size: 0.875rem;
    color: #666;
  }
`;

const CheckMessage = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 0.875rem;
  color: red;
  text-align: left;
`;
