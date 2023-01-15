import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode로 2번 검사
        <React.StrictMode>
            <App/>
        </React.StrictMode>
);