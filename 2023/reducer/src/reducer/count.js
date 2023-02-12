export const countReducer = (count, action) => {
//                            ⬆️     ⬆️
//  dispatch에서 받아온 count(상태) / dispatch의 매개변수
    switch (action.type) {
    case "INCREMENT":
      return count + action.plus;
    case "DECREMENT":
      return count - action.minus;
    default:
      return count;
  }
};
