const express = require("express");
const app = express();

const db = require("./mdoels");
const dotenv = require("dotenv");

const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);

dotenv.config(); // procces.env 접근가능
app.set("port", 3000);

db.sequelize
  .sync()
  .then(() => {
    console.log("DB연결 선공!");
  })
  .catch(console.error);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 서버 실행 중...");
});
