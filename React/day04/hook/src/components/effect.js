import React, { useCallback, useEffect, useState } from "react";

// Effect
const Effect = () => {

    // color의 기본값은 "red"
    const [color, setColor] = useState("red");

    // const color의 값을 바꾸어줌
    const ChangeColor = useCallback(()=>{
        setColor("blue")
    },[])

    useEffect( () => {
        console.log("페이지 시작");
    }, []) 

    useEffect( () => {
        console.log("색이 변경 되었습니다");
    }, [color]/* 의존성 */)

    // return 
    return (
        <>
        <div>useEffect</div>
        <input type="text" readOnly value={color} style={{color}}/>
        <button onClick={ChangeColor}>변경</button>
        </>
    )
}
export default Effect