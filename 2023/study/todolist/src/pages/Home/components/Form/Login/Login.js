import Button from "components/Button/Button";
import * as S from "../style";
function LoginForm() {
  return (
    <S.Form>
      <S.InputBox>
        <input placeholder="e-mail" />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" />
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={"primary-reverse"} hover={"default"} size={"small"}>
        </Button>
      <Button variant={"primary"} hover={"test3"} size={"full"}>
        로그인
      </Button>
    </S.Form>
  );
}
export default LoginForm;