const express = require("express");
const path = require("path");
const nm = require("nodemailer");
const morgan = require("morgan");
const fs = require("fs");
const multer = require("multer");

const app = express();
app.set("port",3000);


app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const mailOption = {
    from: frommail,
    to: tomail,
    subject: title,
    text: content,
    attachments: [{ filename: req.file.originalname, content: data}],
};

//멅터 셋팅
const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, "uploads");
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, //5MB 1024bite = 1KB,
  });

  // view화면
  app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname + "/_mulerMail.html"));
  });

  app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 실행중");
  });