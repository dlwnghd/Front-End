import { useMemo, useRef, useState } from 'react';

function UseMemo() {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const arr = useRef([1, 2, 3, 4]);
    const MemoCount = useMemo(() => {
        arr.current.push(arr.current.length + 1);
        console.log(arr);
        return arr.current;
        // // hook 함수는 또 다른 hook 함수 안에 들어 갈 수 없다
        // // const [count, setCount] = useState() --- ❌ 항상 최상위 루트 혹은 랜더링 함수
    }, [state1]);
    //⬆️ 의존성 배열


    /*
    => ⭐한번 랜더링 이후로 연산할 필요가 없다.
            (랜더링 최적화, 랜더링 시간 단축)
            (메모리는 낭비?)

    => 그러나 특정 state가 바뀌었을 때는 해당 연산을 다시 해야만한다.
    그렇다면 의존성 배열에 해당 state값을 넣어서 그 state 가 변경 되었을 때만
    연산을 재실행 시킬 수 있다.

    첫화면 랜더링 -> useMemo실행 -> 의존성배열 비어있으면 -> 랜더링 되도 실행❌
    의존성 배열에 state가 추가되면 -> 해당 state가 바뀔 때마다 실행

    만약 useMemo가 없다면 값을 계속 똑같겠지만, 래더링 될 때마다 해당 함수를 
    계속 실행하기 때문에 랜더링이 오래 걸린다.

    단, 메모리냐 cpu냐 하는 것은 개발자의 이견에 따라 다르다
    캐싱도 코스트(비용)가 든다
    */
    return (
        <>
            <div>{MemoCount}</div>
            <button onClick={() => setState1((prev) => !prev)}>+</button>
            <button onClick={() => setState2((prev) => !prev)}>유지</button>
        </>
    );
}
export default UseMemo;
