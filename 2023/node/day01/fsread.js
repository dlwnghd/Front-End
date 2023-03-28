const fs = require("fs");

//  ⬇️파일을 비동기적으로 읽음
fs.readFile("./test1.txt", "utf-8", (err, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
});

try {
  //                 ⬇️ 파일을 동기적으로 읽음
  let text = fs.readFileSync("./test2.txt", "utf-8");
  console.log(text);
} catch (err) {
  console.log(err);
} finally {
  console.log("성공과 실패 여부 상관없이 반드시 실행");
}