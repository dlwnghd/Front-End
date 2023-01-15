import { Link } from "react-router-dom";
import LoginForm from "./components/Form/login";
import SignUpForm from "./components/Form/signUp";

function HomePage() {
    let form = 'login'
    const onFormChange = (e) => {
        const {innerText} = e.target;
        form = innerText.toLowerCase();
        console.log(form);
    };

    return (
        <div>
            <header>
                <div onClick={onFormChange}>LOGIN</div>
                <div onClick={onFormChange}>SIGN</div>
            </header>
            {form === 'login' ? <LoginForm/> : <SignUpForm/>}
            <a href="/todo">투두페이지로 이동</a>
            <Link to="/todo">라우터로 투두페이지 이동</Link>
        </div>
    );
}
export default HomePage;