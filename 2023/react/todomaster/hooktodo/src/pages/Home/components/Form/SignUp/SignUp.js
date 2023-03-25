import Button from "components/Button/Button";
import * as S from "../style";
import useInputs from "hooks/useInputs";
import { useEffect, useState } from "react";

function SignUpForm(setForm) {
  const [isPasswordConfirm, setPasswordIsConfirm] = useState(false);  // 비밀번호 확인이 맞는지 아닌지의 대한 상태값 저장
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({  // <= useInputs: 커스텀 훅
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 제출버튼
  const handleSignUpSubmit = (e) => {
    e.preventDefault(); // form태그가 가지고 있는 기본 성질 해제
    if (!email || !password) return alert("정보를 입력해주세요");
    if (!isPasswordConfirm) return alert("비밀번호 확인이 일치하지 않습니다");
    setForm("login");
  };

  /*
    과제

        모든 필드가 채워지지않으면 button의 disabled는 true
            심화.   특정 필드를 지정 후 해당 필드가 채워지지 않으면 disabled는 false
                    특정 필드는 유동적일 수 있다
    
        email의 이메일 양식이 갖춰지지 않으면 disabled는 true
        비밀번호가 8글자 이상이지 않으면 disabled는 true

        위의 유효성 검사 과정을 커스텀 훅(선택)으로 만들어보세요
        위의 유효성은 로그인 페이지에도 재사용합니다.
  */

  useEffect(() => {
    if (password !== passwordConfirm) { // 비밀번호와 비밀번호 확인의 값이 같지 않다면
      return setPasswordIsConfirm(false);
    }
    return setPasswordIsConfirm(true);
  }, [password, passwordConfirm]);

  return (
    <S.Form onSubmit={handleSignUpSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name={"email"} onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input
          type="password"
          placeholder="password"
          name={"password"}
          onChange={onChangeForm}
        />
        <span>비밀번호</span>
      </S.InputBox>
      <S.InputBox>
        <input
          type="password"
          placeholder="password confirm"
          name={"passwordConfirm"}
          onChange={onChangeForm}
        />
        <span>비밀번호 확인</span>
      </S.InputBox>
      {/* 아래와 같이 visible을 통해 관리하면 공간을 차지하고 있기 때문에 갑작스럽게 공간을 차지하는 display:none과는 다르게 표현할 수 있다. */}
      <S.Error visible={!isPasswordConfirm}>
        비밀번호 확인이 일치하지 않습니다.
      </S.Error>
      <Button variant={"primary"} size={"full"} disabled={!isPasswordConfirm}>
        회원가입
      </Button>
    </S.Form>
  );
}
export default SignUpForm;
