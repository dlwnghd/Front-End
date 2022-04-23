import React, { useCallback, useEffect, useState } from "react";

const Effect = () => {

    const [color, setColor] = useState("red");
    const ChangeColor = useCallback(()=>{
        setColor
    })

    useEffect( () => {
        console.log("페이지 시작");
    }, [])

    useEffect( () => {
        console.log("색이 변경 되었습니다");
    }, [color])

    return (
        <>
        <div>useEffect</div>
        <input type="text" readOnly value={color} style={{color}}/>
        <button onClick={ChangeColor}>변경</button>
        ":)"
        </>
    )
}
export default Effect