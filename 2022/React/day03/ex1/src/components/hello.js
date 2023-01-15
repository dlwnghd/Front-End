import React from 'react';

const Hello = ( {name ,color, islover, style} ) => {    // 4개의 객체를 받아옴 객체가 비어있어도 괜찮음
    return (
        <div style={style ? style : {color} }>  {/* style은 외부에서 color를 받아옴 */}
            안녕하세요 
            {name}님!
            {islover ? <span>❤️</span>:null}   {/*islover속성여부에 따른 조건문*/ }
            {islover && <span>❤️</span>}    {/*islover속성여부에 따른 조건문*/ }
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

export default Hello    // Hello모듈을 기본으로 내보내겠다