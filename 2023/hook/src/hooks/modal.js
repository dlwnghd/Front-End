import { useEffect, useRef, useState } from "react";

function TimerModal({count, setCount}){
    
        const TimerRef = useRef();
    
    useEffect(()=> {
        TimerRef.current = setInterval(() => {
          setCount((prev) => prev + 1);
        }, 1000);

        /*
        컴포넌트가 처음 보였을 때
        //
        컴포넌트가 안보였을 때
        */
        return() => {
            clearInterval(TimerRef.current);
            setCount(0);
        };
    },[]);
    return <div>{count}</div>;
}
export default TimerModal