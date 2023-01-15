// 외부에서 받아올 모듈
import React from 'react';

// 객체로 찾기
const TodoTitle = ( {count} ) => {
    console.log(count)

    return(
        <div className="navbar">
            할 일 목록 리스트 <span> {count}개</span>
        </div>
    )
}
export default TodoTitle;   // TodoTitle을 기본적으로 내보내겠다