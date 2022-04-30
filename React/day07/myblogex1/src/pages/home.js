import React from "react";
// appLatout 형태 import
import AppLayout from "../_layout/appLayout";
// HomeMain 페이지 틀 import
import HomeMain from "../components/homeMain";

// 불변하는 Home 객체
const Home= () => {
    return (
        <AppLayout>
            <HomeMain/>
        </AppLayout>
    )
}
export default Home;