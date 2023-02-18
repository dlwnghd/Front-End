import { useEffect, useState } from "react";
import TimerModal from "./modal";

function UseEffect(){
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("useEffect 실행!")
        setIsActive(true);
    }, []);
    /* 
    컴포넌트가 마운트 되었을 때만 실행 
    ➡️처음에 화면에 랜더링되었을 때 1회 실행
    */

    useEffect(() => {
        if(!isActive) return;
        console.log('실행');
    },[isActive]);
    /* 컴포넌트가 마운트 되었을 때 실행, 의존성 배열 내부의 요소가 바뀔 때 마다도 실행 */

    /*
    컴포넌트가 마운트 되었을 때 실행
    의존성 배열 내부의 값에 따라 해당 로직을 재실행할 것인지 실행
    => 특정 state가 바뀔 때마다 실행할 이벤트를 정의
    */
    
    return (
        <div>
            {isActive && (
                <>
                <p>컴포넌트가 마운트 되었습니다</p>
                <TimerModal count={count} setCount={setCount}/>
                </>
                )}
            <button onClick={() => setIsActive((prev) => !prev)}>재실행</button>
        </div>
    )
}
export default UseEffect