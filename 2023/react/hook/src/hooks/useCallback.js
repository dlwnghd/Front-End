import { useCallback, useState } from "react";

function UseCallback(){
    
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);

    const onAddNumber = useCallback(() => {
      if (!state) return;
      setCount(count + 1);
    }, [state, count]);
    
    const onMinusNumber = useCallback(() => {
      if (!state) return;
      setCount(count - 1);
    }, [state, count]);
    

    /*
    안에서 활용되는 state 값을 의존성 배열에 넣어주면 된다.
    해당 함수와 연관없는 state가 변동 되었을 때
    해당 함수를 재선언할 필요는 없다.

    따라서 이를 캐싱하고 있다가 재선언하지 않고
    가져다가 사용하는 것을 useCallback이라 한다.

    랜더링 최적화
    코스트(비용)이 존재한다.

    백엔드나 api 통신이 아닌 이상 사용하지 않습니다.
    */

    return (
        <>
            <div>
                <button onClick={onAddNumber}> + </button>
                {count}
                <button onClick={onMinusNumber}> - </button>
            </div>
            <button onClick={() => setState((prev) => !prev)}>{state ? '비활성화' : '활성화'}</button>
        </>
    );
}
export default UseCallback;