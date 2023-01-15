const express = require('express');
const app = express();

const db = require("./models");
const dotenv = require("dotenv");

dotenv.config(); // process.env 접근가능
app.set("port", 3000);

db.sequelize
    .sync()
    .then(() => {
    console.log("DB연결 선공!");
    })
    .catch(console.error);


app.listen(app.get('port'), () => {
    console.log(app.get('port'), "번 서버 실행 줄...");
});