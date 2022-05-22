// const타입 fs는 사용자가 요구하는 정보
const fs = require("fs");
// const타입 fsPromise는 사용자가 요구하는 정보의 promises 기능을 사용한 정보
const fsPromise = require("fs").promises;
// const 타입 data는 "Hello Node.js!"가 담겨있는 데이터
const data = "Hello Node.js!";

//비동기식(fsPromise)
fsPromise
// writeFile()     : 파일을 비동기적으로 씀
  .writeFile("./text1.txt", data, "utf-8")  // 파일의 경로는 자기자신 기준
  .then(() => {
    // resolve (성공)
    // 비동기식으로 파일이 저장되었다는 메세지를 콘솔창에 띄움
    console.log("비동기식으로 파일 저장!");
  })
  .catch((error) => {
    // 비동기식으로 파일을 저장하지 못하고 에러라는 메세지를 콘솔창에 띄움
    console.log(error);
  });

// //비동기식(if-else)
// fs.writeFile("./text2.txt", data, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("비동기식으로 파일 저장!");
//   }
// });

//동기식
fs.writeFileSync("./text2.txt", data, "utf-8");


// //동기식
// // writeFileSync() : 파일을 동기적으로 씀
// fs.writeFileSync("./text2.txt", data, "utf-8");
// console.log("동기식으로 파일 저장!");

// // ❓❓❓❓
// // 동기식 파일 처리는 에러에 대한 처리는 하지 않는건가?