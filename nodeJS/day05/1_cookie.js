const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(morgan("dev"));

app.set("port", 3000);

app.get("/setcookie", (req, res) => {
  try {
    res.cookie(
      "member",
      { id: "apple", name: "김사과", gender: "남성" },
      {
        maxAge: 1000 * 60 * 3,
      }
    );
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
});

app.get("/showcookie", (req, res) => {
  res.send(req.cookies);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번 포트로 실행 중");
});
