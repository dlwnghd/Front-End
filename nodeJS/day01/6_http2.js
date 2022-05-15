const fs = require("fs");
const http = require("http");

http
  .createServer((req, resp) => {
    fs.readFile("./nodeJS/day01/test.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resp.writeHead(200, { "content-type": "text/html" });
        resp.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log(`3000번 포트로 실행중...`);
  });

// 상황에 맞는 html과 data를 res로 보내게 되면 서버로서 활용가능
// ex) req methode와 url을 프론트에서 보내주면 해당 req.url을 통해 url과 method를 읽고 맞는 html과 data를 함께 보내줌

// 그러나 http 모듈 말고 다양한 기능을 지원하는 express 모듈이 있기 때문에
// http는 원리를 이해하는 용도로 사용해도 좋음
