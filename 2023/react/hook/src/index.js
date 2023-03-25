import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 는 엄격 검사 모드로 코드를 2번 실행시킴
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);