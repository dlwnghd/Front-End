// Import
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { flexCenter } from "../../styles/common";
import LoginForm from "./components/Form/login";
import SignUpForm from "./components/Form/signUp";


// Pagination
function HomePage() {
    let form = 'login'

    const onFormChange = (e) => {
        const {innerText} = e.target;
        form = innerText.toLowerCase();
        console.log(form);
    };

    return (
        <Wrapper>
            <Header>
                <div onClick={onFormChange}>LOGIN</div>
                <div onClick={onFormChange}>SIGN</div>
            </Header>
            {form === 'login' ? <LoginForm/> : <SignUpForm/>}
            <a href="/todo">투두페이지로 이동</a>
            <Link to="/todo">라우터로 투두페이지 이동</Link>
        </Wrapper>
    );
}
export default HomePage;

// CSS
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    padding-bottom: 60px;
    ${flexCenter}
    flex-direction: column;
`;

/*scss 문법 */
const Header = styled.header`
  background-color: ${({theme}) => theme.PALETTE.primary[300]};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    height: 100%;
    width: 50%;
    ${flexCenter}
    cursor: pointer;

    :hover {
      background-color: #e0e0e0;
    }
  }
`;