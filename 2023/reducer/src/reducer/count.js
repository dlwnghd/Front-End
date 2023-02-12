export const countReducer = (state, action) => {
    //                        ⬆️     ⬆️
    //  dispatch에서 받아온 count / dispatch 내부에 정의된 객체
    switch (action.type) {
    case "INCREMENT":
      return state + action.count;
    case "DECREMENT":
      return state - action.count;
    default:
      return state;
  }
};
