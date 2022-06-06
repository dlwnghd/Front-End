const express = require("express");
const session = require("express-session");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "!@#$%^&",
    resave: false, //세션이 똑같으면 다시 저장하지 않겠다
    saveUninitialized: false,
    // req메시지가 들어왔을 때 새로 새성된 session에 아무런 작업이 이루어지지 않은 상황
    // 따라서 session을 강제로 저장, 아무 내용이 없는 session이 계속해서 저장될 순 있음
  })
);

app.set("port", 3000);

app.post("/login", (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpw;

  if (userid === "admin" && userpw === "1234") {
    req.session.member = {
      id: userid,
      pw: userpw,
    };
    res.status(200).send(req.session);
  } else {
    res.status(500).send("failure");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy(() => { // 세션 삭제
    console.log("세션이 삭제되었습니다");
  });
  res.send("logOutOk");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번으로 서버 실행 중");
});