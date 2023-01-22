/* 배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로
 * 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
 */

// // 나의 풀이1
// function division(arr, num) {
//     answer = new Array(Math.round(arr.length / num));       // 정답 배열의 길이 선정 (주어진 배열 / 나눌 배열)
//     // 배열이 빌때까지 반복
//     //       num만큼 반복
//     //          배열에서 원하는 원소의 객수를 뽑기 
//     //          뽑은 숫자로 배열 생성 후 추가
//     //          정답 배열에 추가
//     for (var j = 0; j < answer.length; j++) {   // 
//         a1 = new Array();
//         for (var i = 0; i < num; i++) {
//             if(arr.length == 0){continue}
//             else{
//                 a1.push(arr.shift());
//             }
//         };
//         answer[j] = a1;
//     }
//     return console.log(answer);
// }

// ChatGPT 풀이

// // 풀이2
// function division(arr, len) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i += len) {
//         newArr.push(arr.slice(i, i+len));
//     }
//     return console.log(newArr);
// }

// // 풀이3
// function division(arr, len) {
//     return console.log(
//         Array.from({ length: Math.ceil(arr.length / len) }, (_, i) =>
//         arr.slice(i * len, (i + 1) * len)
//         )
//     );
// }

// [나의 코드를 업그레이드 하는 방법]
// 1. 원래 배열을 수정하는 shift() 메서드를 사용하는 대신 더 효율적이고 원래 배열을 수정하지 않는 splice() 메서드를 사용할 수 있습니다.
// 2. 블록 범위 변수에 대해 let을 사용하는 것이 더 권장되므로 var 대신 let을 사용할 수 있습니다.
// 3. 보다 설명적인 console.log 메시지를 위해 템플릿 리터럴 또는 문자열 연결을 사용할 수도 있습니다.
// 4. 더 설명적이고 이해하기 쉽도록 함수 이름을 바꿀 수도 있습니다.

// 업데이트 된 코드 버전
function division(arr, num) {
    let subArrays = new Array(Math.round(arr.length / num));    // 서브 배열 선언
    for (let j = 0; j < subArrays.length; j++) {                // 서브 배열의 길이만큼 반복
        let a1 = new Array();                                       // 새로운 배열 생성(a1)
        for (let i = 0; i < num; i++) {                             // 각 배열에 들어갈 원소의 갯수만큼 반복
            if(arr.length == 0){continue}                               // 만약 배열의 길이가 0이라면 continue로 탈출
            else{                                                       // 아니라면
                a1.push(arr.splice(0,1)[0]);                            // a1에 처음 추어진 배열(arr)의 1번째 요소를 제거하고 제거된 요소를 포함하는 배열을 반환, [0]에서 요소를 추출
                                                                        // 즉 배열의 첫 번째 요소를 제거하고 제거된 요소를 반환하여 a1에 추가
            }
        };
        subArrays[j] = a1;                                          // 서브 배열의 j번째는 a1배열이라고 선언 
    }
    return console.log(subArrays);                              // 정답 출력
}


arr = [1, 2, 3, 4, 5]
division(arr, 2);

// divition(arr, 2); === [ [1,2], [3,4], [5] ]