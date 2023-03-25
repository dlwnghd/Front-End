// flux패턴의 💛store다!

export const countReducer = (count, action) => {
  //                            ⬆️     ⬆️
  //  dispatch에서 받아온 count(상태) / dispatch의 매개변수

  // state를 관리하는 로직을 바깥으로 뺌
  // 왜?
  // - 재사용성 : 어디에서든 아래의 비지니스로직을 사용할 수 있음
  // - 가독성 : 로직을 바꾸기 위해서 이 파일 저 파일을 돌아다니지 않아도 됨

  // reducer
  // 비지니스 로직을 컴포넌트로 분리하여 외부의 파일에서 관리한다.

  // ❤️action ➡️ 🧡dispatcher ➡️ 💛store

  // 비지니스 로직(기능)
  switch (action.type) {
    case "INCREMENT":
      return count + action.plus;
    case "DECREMENT":
      return count - action.minus;
    default:
      return count;
  }
};
