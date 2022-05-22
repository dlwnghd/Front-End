let error = false; // let타입 error = false

// a는 callback과 error를 매개변수로 받아 실행
const a = (callback, error) => {
    if (error) {
        console.log(error);
    } else {
        callback();
    }
};

// b 기능
const b = () => {
    console.log("콜백 실행");
};

// a에 b와 error를 매개변수로 받아서 실행
a(b, error);

// 만약 이러한 콜백이 계속해서 중첩된다면 콜백 지옥 현상

let number = 5;

// 에러가 발생했을 때
const errCallback = () => {
    // 실패 관련 로직
};

const callback = (number, callback) => {
    number = number + 1;
    console.log(number);
    if (callback) {
        setTimeout(callback, 500, number);
    }
};

// ⭐콜백 지옥⭐
callback(number, function (number) {
    callback(number, function (number) {
        callback(number, function (number) {
            callback(number, function (number) {
                callback(number);
            }, errCallback());
        }, errCallback());
    }, errCallback());
}, errCallback());

// 에러처리부터 연산 함수 작성까지 모두 복잡 특히 비동기 처리라면 그 연산은 더욱 복잡 따라서 해당 값이 완료되면 성공 상태와 실패 상태를
// 반환하는 Promise 함수의 사용