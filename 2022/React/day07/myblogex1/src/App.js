import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// login 페이지 import
import Login from './pages/login';
// 회원가입 페이지 import
import Sign from './pages/sign';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign" element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;