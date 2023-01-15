import './App.css';
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/chat/home" element={<LoginPage></LoginPage>}/>
        <Route path="/chat/home/:chatId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
