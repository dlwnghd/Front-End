// const타입의 fs는 사용자가 원하는 정보
const fs = require("fs");
// let타입의 text는 null값
let text = null;

// 예외처리
try {
  // text는 fs의 파일을 동기적으로 읽음
  text = fs.readFileSync("./text1.txt", "utf-8");
  // text에 들어있는 데이터를 콘솔창에 출력
  console.log("text : " + text);
} catch (e) { // catch (e) : 예외가 발생했을 경우
  // "동기식 파일 읽기 실패!" 메세지 출력
  console.log("동기식으로 파일 읽기 실패!");
} finally { // finally : 예외 발생 여부에 상관없이 수행
  console.log("예외 발생 여부에 상관없이 수행");
}

try {
  text = fs.readFileSync("./text2.txt", "utf-8");
  console.log("text : " + text);
} catch (e) {
  console.log("text2.txt : 동기식으로 파일 읽기 실패!");
}

// try {
//   text = fs.readFileSync("./day01.txt", "utf-8");
//   console.log(text);
// } catch (e) {
//   console.log("dat01.txt : 동기식으로 파일 읽기 실패!");
// }

//

fs.readFile("./text1.txt", "utf-8", (err, data) => {
  if (err) {  // 에러라면
    console.log("text1.txt에 readFile() : 비동기적으로 읽기");
    console.log("err : " + err);
  } else {
    console.log("data : " + data);
  }
});

fs.readFile("./text2.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("err : " + err);
  } else {
    console.log("data : " + data);
  }
});

// fs.readFile("./day01.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 만약 순서대로 뽑고 싶다면? promise와 async / await을 활용하면 된다
