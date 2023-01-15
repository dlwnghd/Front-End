const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nm = require("nodemailer");

const app = express();
app.set("port",3000);

app.use(
    morgan("dev"),
    express.static(path.join(__dirname,"public")),
    express.json(),
    express.urlencoded({ extended:false })
);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/_mail.html"));
});

app.post("/mail", (req, res) => {
    console.log(req.body);
    /*
      {
         frommail : 값,
         tomail : 값,
         ...
       }
       req.body.frommail => frommail의 값
       // moran에 로그를 찍었기 때문에 터미널에 해당 데이터가 나옵니다
       // 이게 배열 [] 안에 있는지 객체 {} 안에 있는지
  */
    const frommail = req.body.frommail;
    const tomail = req.body.tomail;
    const title = req.body.title;
    const content = req.body.content;
  
    const transport = nm.createTransport({
      service: "gmail",
      auth: {
        user: "지메일 아이디",
        pass: "지메일 비밀번호", // 2단계 인증 시 보안 탭의 앱 비밀번호 삽입
      },
      host: "smtp.mail.com",
      port: "587",
      // https://myaccount.google.com/lesssecureapps 보안 허용
    });
  
    const mailOption = {
      from: frommail,
      to: tomail,
      subject: title,
      text: content,
    };
  
    try {
      transport.sendMail(mailOption, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
          res.send("Ok");
        }
        transport.close();
      });
    } catch (error) {
      console.log(error);
    }
  });

app.listen(app.get("port"), () =>{
    console.log(app.get("port"), "번 포트에서 실행 중~");
});

