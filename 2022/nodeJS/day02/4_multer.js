const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const app = express();

app.set("port", 3000);

app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없어서 폴더를 생성합니다");
  fs.mkdirSync("uploads/");
}

//멅터 셋팅
const upload = multer({
  storage: multer.diskStorage({
    //도착지 설정
    destination(req, file, done) {
      done(null, "uploads");
    },
    // 파일명 설정
    filename(req, file, done) {
      // 파일명.확장명 (ex. apple.png)
      // ext = 확장자명 (.png)
      // path.basename() = 파일명 (apple)
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // 파일명 + 현재시간 + 확장자명 == 파일명 중복이 없게 만들기 위함
    },
  }),
  // 파일 용량 제한 설정
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB 1024bite = 1KB,
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname + "/_multer.html"));
});

/*
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.writeHead("200", { "content-type": "text/html;charset=utf-8" });
  res.write(`<h2>이미지 업로드 성공 </h2>`);
  res.write(`<p>제목 : ${req.body.title} </p>`);
  res.write(`<p>파일명 : ${req.file.originalname} </p>`);
  res.write(`<p><img src ="/uploads/${req.file.filename}" width="500px"/></p>`);
  res.end();
});
*/

app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files);
    res.writeHead("200", { "content-type": "text/html;charset=utf-8" });
    res.write(`<h2>이미지 업로드 성공 </h2>`);
    res.write(`<p>제목 : ${req.body.title} </p>`);
    res.write(`<p>파일명 : ${req.files.image1[0].originalname} </p>`);
    res.write(
      `<p><img src ="/uploads/${req.files.image1[0].filename}" width="500px"/></p>
      <p><img src ="/uploads/${req.files.image2[0].filename}" width="500px"/></p>`
    );
    res.end();
  }
);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 실행중");
});
