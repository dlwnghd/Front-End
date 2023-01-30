import styled from "styled-components";
import { testBackground } from "./styles/common";

function App() {
    return (
        <S.Wrapper>
            <S.Form>
                <h1>test</h1>
                <input />
            </S.Form>
        </S.Wrapper>
    );
}
export default App;

const Wrapper = styled.div`
  ${testBackground};
`;

const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;

  & input {
    :hover {
        background-color: black;
        color: red;
    }
  }
`;

const S = {
    Wrapper,
    Form
};