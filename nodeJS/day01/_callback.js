let error = false;
const a = (callack, error) => {
  if (error) {
    console.log(error);
  } else {
    callack();
  }
};

const b = () => {
  console.log("콜백 실행");
};

a(b, error);

// 만약 이러한 콜백이 계속해서 중첩된다면
// 콜백 지옥 현상

let number = 5;
const errCallback = () => {
  // 실패 관련 로직
};

const callack = (number, callack) => {
  number = number + 1;
  console.log(number);
  if (callack) {
    setTimeout(callack, 500, number);
  }
};

callack(
  number,
  function (number) {
    callack(
      number,
      function (number) {
        callack(
          number,
          function (number) {
            callack(
              number,
              function (number) {
                callack(number);
              },
              errCallback()
            );
          },
          errCallback()
        );
      },
      errCallback()
    );
  },
  errCallback()
);

// 에러처리부터 연산 함수 작성까지 모두 복잡
// 특히 비동기 처리라면 그 연산은 더욱 복잡

// 따라서 해당 값이 완료되면 성공 상태와 실패 상태를 반환하는 Promise 함수의 사용
