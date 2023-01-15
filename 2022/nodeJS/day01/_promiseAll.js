// 성공 로직만 처리 가능
const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공1");

// 다수의 프로미스도 처리 가능
Promise.all([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
