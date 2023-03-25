// 공용 헤더와 공용 푸터 생성

// Import 구간
import { Outlet } from "react-router-dom";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";


function Layout({ children }){
    return (
      <>
        <BasicHeader />
        <Outlet />
        <BasicFooter />
      </>
    );
}
export default Layout;