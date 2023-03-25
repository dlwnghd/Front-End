import { useState } from "react";

function UseState() {

    // let count = 0;
    const [count, setCount] = useState(0);
    /*
    useState는 변수를 react의 state로 관리하는 함수
    [변수명, 바꿀 수 있는 순수함수] = useState(기본값)
    let/const 변수명 = 기본값;
     */


    const onAddNumber = () => {
        setCount(count+1);
    };
    
    const onMinusNumber = () => {
        setCount(count-1);
    };
    
    console.log(count);

    return (
      <div>
        <button onClick={onAddNumber}> + </button>
        {count}
        <button onClick={onMinusNumber}> - </button>
      </div>
    );
}
export default UseState;