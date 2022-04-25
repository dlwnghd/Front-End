import React from 'react';


const TodoTitle = ( {count} ) => {

    return(
        <div className="navbar">
            할 일 목록 리스트 <span> {count}개 </span>
        </div>
    )
}
export default TodoTitle;