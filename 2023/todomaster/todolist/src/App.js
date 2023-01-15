import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { TodoPage } from "./pages/Todo";

// import Header from "./Header";
// import Content from "./Content";
// import Footer from "./Footer";

function App() {


  // return (
  //   // React.Fragment = <>...</>
  //   // 컴포넌트는 다른태그로 감싸주어야 연달아서 사용 가능 
  //   <React.Fragment>
  //     {/* 주석 */}
  //     <Header />
  //     <Content />
  //     <Footer />
  //   </React.Fragment>
  // );

  return (
    <BrowserRouter>
     {/* HTML5를 지원하는 브라우저 주소를 감지 */}
        {/* Route path와 감지한 주소가 일치한 router만을 랜더링 시켜주는 역할 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;