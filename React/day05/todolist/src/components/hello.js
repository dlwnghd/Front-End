import React from "react";

const Hello = ( {name, color, islover, style} ) =>{
    return (
        <div style={style ? style : {color} }>
            안녕하세요
            {name}님! 
            {/* 삼항연산자 {조건식 ? true : null} */}
            {islover ? <span>❤</span>:null}
            {/* {조건식 && true } */}
            {islover && <span>❤</span>}
        </div>
    )
    // && 조건부 랜더링 방식
    // 삼항연산자 {조건식 ? true : null}
    // {조건식 && true }
}

Hello.defaultProps = {
    color:"red"
}

export default Hello