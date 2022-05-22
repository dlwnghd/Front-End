// const state = false; //const타입의 state는 false
const state = true; //const타입의 state는 true

// 실행은 바로 하지만 결과값은 나중에 받는 객체
// 백엔드에서 데이터를 받아오건, 비동기 적으로 실행시켜야할 때 해당 부분을 실행을 먼저하고
// 결과값을 나중에 받아옴

// resolve와 reject를 매개변수로 받는 promise
// const promise = new Promise((resolve, reject) => {
//   //대기 상태
//   if (state) {  //state가 true라면
//     resolve("성공");
//   } else {
//     reject("실패");
//   }
// });

// promise가 성공한다면
// promise
//   .then((message) => { // return값을 message에 담음
//     //resolve (성공)
//     console.log(message);
//   })
//   .catch((error) => { // promise가 실패했다면
//     //reject (실패)
//     console.log(error);
//   })
//   .finally(() => {  // promise의 성공여부에 상관없이 무조건 1회 실행
//     // 성공, 실패 여부 상관없이
//     console.log("무조건 1회 실행");
//   });

//   // promise를 2번 연속 출력
// promise
//   .then((message) => {
//     console.log(message);
//     return message; // message값을 리턴
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let타입의 number는 5
let number = 5;

// number를 매개변수로 받는 calback함수
const callack = (number) => {
  number = number + 1;
  setTimeout(() => {
    console.log("callback : " + number);
  }, 500);
  return number;
};

// const타입의 promise2는 resolve와 reject를 매개변수로 받는 새로운 Promise타입
const promise2 = new Promise((resolve, reject) => {
  resolve(callack(number)); // 이행
  reject("실패"); // 실패
});

promise2
  .then((reusult) => {
    return callack(reusult);  //resolve (성공)
  })
  .then((result2) => {
    return callack(result2); //resolve (성공)
  })
  .then((result3) => {
    return callack(result3); //resolve (성공)
  })
  .then((result4) => {
    return callack(result4); //resolve (성공)
  })
  .catch((error) => { // reject (실패)
    console.log(error);
  });
