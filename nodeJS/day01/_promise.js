//const state = true;
const state = true;

// 실행은 바로 하지만 결과값은 나중에 받는 객체
// 백엔드에서 데이터를 받아오건, 비동기 적으로 실행시켜야할 때 해당 부분을 실행을 먼저하고
// 결과값을 나중에 받아옴

const promise = new Promise((resolve, reject) => {
  //대기 상태
  if (state) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    //resolve (성공)
    console.log(message);
  })
  .catch((error) => {
    //reject (실패)
    console.log(error);
  })
  .finally(() => {
    // 성공, 실패 여부 상관없이
    console.log("무조건");
  });

promise
  .then((message) => {
    console.log(message);
    return message;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

////

let number = 5;

const callack = (number) => {
  number = number + 1;
  setTimeout(() => {
    console.log(number);
  }, 500);
  return number;
};

const promise2 = new Promise((resolve, reject) => {
  resolve(callack(number));
  reject("실패");
});

promise2
  .then((reusult) => {
    return callack(reusult);
  })
  .then((result2) => {
    return callack(result2);
  })
  .then((result3) => {
    return callack(result3);
  })
  .then((result4) => {
    return callack(result4);
  })
  .catch((error) => {
    console.log(error);
  });
