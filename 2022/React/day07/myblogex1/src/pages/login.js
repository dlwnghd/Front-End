import React from "react";
// appLatout 형태 import
import AppLayout from "../_layout/appLayout";
// loginMain import
import LoginMain from "../components/loginMain"; 

const Login = () => {
    return (
        <AppLayout>
            <LoginMain/>
        </AppLayout>
    )
}
export default Login;