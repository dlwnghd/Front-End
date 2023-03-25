import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

/*
styled - reset
*/

// 전역 스타일 : 모든 곳에 영향을 미침
const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        background-color: #e7e7e7;
    }

    button{
        border: none;
    }
`;
export default GlobalStyles;