const express = require("express");
const user = require("./routes/user");
const morgan = require("morgan");

//익스프레스 실행
const app = express();

//미들웨어사용
app.use(
  morgan("dev"),
  express.json(),
  express.urlencoded({extended: false})
);

app.use("/user", user); //라우터사용

app.set("port", 3000); //포트설정

//서버실행
app.listen(app.get("port"), () => {
    console.log(app.get("port") + "번 포트로 서버 실행 중...");
});
