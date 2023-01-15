import styled from "styled-components";

const LoginForm = () => {
    return (
    <LoginTamplet>
        <div className="header">KOREAIT TALK</div>
        <div className="inputForm">
            <p>
                <input type="text" placeholder="ID를 입력해주세요" />
            </p>
            <p>
                <input type="password" placeholder="비밀번호를 입력해주세요" />
            </p>
        </div>
        <div className="buttonGroup">
            <button></button>
        </div>
        <p className="regist">아직 회원이 아니신가요?</p>
    </LoginTamplet>
    );  
};
export default LoginForm;

const LoginTamplet = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 36rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: -60px 0px 100px -90px #000, 60px 0px 100px -90px #000;

  & .header {
    position: absolute;
    top: 6.5rem;
    font-size: 3rem;
    color: #1a6dff;
    font-weight: 900;
  }

  & .inputForm {
    margin-top: 3rem;

    & input {
      width: 18rem;
      height: 2.5rem;
      margin-top: 1rem;
      border-radius: 0.2rem;
      border: 1px solid #4f4e5c;
      padding-left: 1rem;

      &:focus {
        outline: none;
      }
    }
  }
  & button {
    width: 18rem;
    height: 2rem;
    margin-top: 2rem;
    color: #fff;
    background-color: #1a6dff;
    cursor: pointer;
    border: none;

    &:hover {
      opacity: 0.8;
    }margin-bottom: 1rem;
  }


`
