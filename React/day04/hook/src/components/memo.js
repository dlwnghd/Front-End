import React, { useMemo, useState } from "react";

const Memo = () => {

    const [color, setColor] = useState("red");
    const [text, setText] = useState("여긴가?");

    const getColor = useMemo(() => console.log(`색은 ${color}입니다`), [color]);
    // Memo에서 []는 의존성 배열, []안에 있는 값이 변경되면 그 때 실행
    const getText = useMemo(() => console.log(`텍스트는 ${text}입니다`), [text]);

    const onChageColor = () => {
        setColor("blue")
    }

    const onChageText = () => {
        setText("바뀜")
    }

    return (
        <>
            <div>Memo</div>
            <input type="text" readOnly value={text} style={{color,text}}/>
            <button onClick={onChageColor}>색상 변경</button>
            <button onClick={onChageText}>텍스트 변경</button>
        </>
    )
}
export default Memo