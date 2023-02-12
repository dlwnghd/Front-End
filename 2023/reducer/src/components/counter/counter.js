// import
import { useReducer, useState } from "react";
import { countReducer } from "../../reducer/count";

function Counter() {

  // 기존에 useState를 이용하여 상태를 관리함
  // const [count, setCount] = useState(0);

  // useReducer를 이용하여 외부에서 상태를 관리함
  const [count, dispatch] = useReducer(countReducer, 0);

  // + 버튼 클릭 : dispatch의 매개변수를 action에 전달
  const onIncrementCount = () => {
    dispatch({
      type: "INCREMENT",
      plus: 1,
    });
  };

  // - 버튼 클릭 : dispatch의 매개변수를 action에 전달
  const onDecrementCount = () => {
    dispatch({
      type: "DECREMENT",
      minus: 1,
    });
  };

  /*
    useReducer의 역할은
    복잡한 상태 업데이트의 로직을
    컴포넌트 안에서 관리하지 말고 바깥에 따로 빼서 관리할 수 있도록 하자

    flux 패턴
    action 객체를 dispatcher를 통해 store(reducer)에 전달하여
    비지니스 로직(기능)을 실행한다
    */

  return (
    <>
      <button onClick={onIncrementCount}>+</button>
      {count}
      <button onClick={onDecrementCount}>-</button>
    </>
  );
}
export default Counter;
