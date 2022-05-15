const fs = require("fs");
let text = null;

//
try {
  text = fs.readFileSync("./text1.txt", "utf-8");
  console.log(text);
} catch (e) {
  console.log("동기식으로 파일 읽기 실패!");
} finally {
  console.log("예외 발생 여부에 상관없이 수행");
}

try {
  text = fs.readFileSync("./text2.txt", "utf-8");
  console.log(text);
} catch (e) {
  console.log("동기식으로 파일 읽기 실패!");
}

try {
  text = fs.readFileSync("./day01.txt", "utf-8");
  console.log(text);
} catch (e) {
  console.log("동기식으로 파일 읽기 실패!");
}

//

fs.readFile("./text1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readFile("./text2.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readFile("./day01.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 만약 순서대로 뽑고 싶다면? promise와 async / await을 활용하면 된다
