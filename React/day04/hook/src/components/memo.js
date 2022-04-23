import React, { useMemo, useState } from "react";

const Memo = () => {

    const [color, setColor] = useState("red");
    const [text, setText] = useState("");

    const getColor = useMemo(() => console.log(`색은 ${color}입니다}`), [color]);
    // Memo에서 []는 의존성 배열, []안에 있는 값이 변경되면 그 때 실행
    const getText = useMemo(() => console.log("텍스트는 실행하지 않습니다"), [text])

    const onChageColor = () => {
        setColor("blue")
    }

    return (
        <>
            <div>Memo</div>
            <input type="text" readOnly value={color} style={{color}}/>
            <button onClick={onChageColor}>변경</button>
        </>
    )
}
export default Memo