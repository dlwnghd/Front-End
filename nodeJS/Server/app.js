const express = require("express");
const db = require("./models");
const dotenv = require("dotenv");

//passport require(passport 요청)
const passportConfig = require("./passport");
const passport = require("passport"); 

//router require(router 요청)
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

//login require(login 요청)
const cookieParser = require("cookie-parser");
const session = require("express-session");

dotenv.config(); // process.env 접근가능
const app = express();
app.set("port", 3000);

db.sequelize
  .sync()
  .then(() => {
    console.log("DB연결 선공!");
  })
  .catch(console.error);

passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);
app.use("/post", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 서버 실행 중...");
});
