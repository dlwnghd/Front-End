const express = require("express");
const post = require("./_post");
const user = require("./_user");

const app = express();

app.set("port", 3000);
app.use("/post", post); // "/" = "/post"
app.use("/user", user); // "/" = "/user"

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 실행 중");
});
