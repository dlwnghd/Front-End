import React from 'react';

const Hello = ( {name ,color, islover, style} ) => {
    return (
        <div style={style ? style : {color} }>
            안녕하세요 
            {name}님!
            {islover ? <span>❤️</span>:null}
            {islover && <span>❤️</span>}
        </div>
    )
    // && 조건부 랜더링 방식
    // 삼항연산자 {조건식 ? true : null}
    // 조건신 && true
}

// defaultProps : Props가 전달 된 것이 없다면 {}값으로 변경
Hello.defaultProps = {
    color: "red"
}

export default Hello