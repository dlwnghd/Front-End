const fs = require("fs");

const text = "취업하고 싶다";

//  ⬇️파일을 비동기적으로 작성
//              현재경로, 텍스트, 언어형식
fs.writeFile("./test1.txt", text, "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("파일이 정상적으로 저장되었습니다");
  }
});

try {
  //  ⬇️파일을 동기적으로 작성
  fs.writeFileSync("./test2.txt", text, "utf-8");
} catch (err) {
  console.log(err);
}
