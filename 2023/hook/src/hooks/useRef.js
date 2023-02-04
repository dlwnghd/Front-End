import { useRef, useState } from "react";

// let count = 0;

function UseRef() {
    const Htmlref = useRef(null);
    const count = useRef(0);
    const [isShow, setIsShow] = useState(false);

    const onChangeColor = () => {
        Htmlref.current.style.color = 'red';
        count.current += 1;
    };

    const onShowtadaBtn = () => {
        setIsShow((prev) => !prev);
        // prev => set 함수 인자의 callback 함수 반환 값
        // prev => 현재가지고 있는 state의 함수의 값
        // !prev => false -> true
        //          true -> false
    }

    console.log(count);

    return (
      <>
        {isShow && <div>Tada!</div>}
        <div ref={Htmlref}>COLORS</div>
        <button onClick={onChangeColor}>색상 변경 / 카운트 추가</button>
        <button onClick={onShowtadaBtn}>SHOW</button>
      </>
    );
}
export default UseRef;