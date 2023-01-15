const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan("dev"));
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.set("port", 3095);
const server = app.listen(app.get("port"),() => {
    console.log(app.get("port") + "번으로 실행 중");
});