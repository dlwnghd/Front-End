const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Post } = require("../models");
const passport = require("passport");

// localhost:3000/user
router.post("/", async (req, res, next) => {
  try {
    // select 합니다. User테이블에 있는 하나의 데이터
    const emailCheck = await User.findOne({
      // 사용자가 보낸 req.body.email과 같은 데이터를 찾습니다.
      where: {
        email: req.body.email,
      },
    });

    // 만약 해당 데이터가 있다면
    // 사용 중인 메일
    if (emailCheck) {
      return res.status(403).send("이미 사용 중인 이메일입니다");
    }
    // 없다면
    // 사용자가 보낸 암호인 req.body.paswword를 bcrypt를 사용하여 단방향 암호화를 진행
    const hashedPassword = await bcrypt.hash(req.body.password, 11);

    // insert 합니다 User 테이블에 사용자가 보낸 req.body에 실린 데이터를
    // 단, 여기서 email, name, password는 키 값이므로 models의 user.js에 정의해놓은 컬럼명(필드명)과 같아야 한다
    const signupUser = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });

    // 회원가입이 완료 되면 회원가입 완료라는 메시지를 보냅니다
    res.status(201).send("회원가입 완료\n" + signupUser);
  } catch (err) {
    console.log(err);
  }
});

//로그인
router.post("/login", (req, res, next) => {
  //passport 인증 로직 내부의 내용은 이해하지 않아도 괜찮다
  passport.authenticate("local", (err, user, desc) => {
    if (err) {
      console.log(err);
      return next(err);
      // next는요 '다음' 모듈을 실행해라 next()
      // next(err) 안에 내용을 담으면 해당 모듈로 '이동'해라
    }
    if (desc) {
      return res.status(401).send(desc.reason);
    }
    // req.login = passport 사용법
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.log(loginError);
        return next(loginError);
      }

      // 여기는 시퀄라이즈 로직이기에 집중할 필요가 있음
      const UserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"], // model의 필드명과 같아야함
        },
        include: [
          {
            model: Post, // 해당 user와 관련있는 Post 정보도 가지고 와라
          },
        ],
      });
      return res.send(200).json(UserWithoutPassword);
      //패스워드가 제외된 로그인한 유저의 정보를 제이슨 형태로 res로 프론트엔드에 전달
    });
  })(req, res, next);
});

//로그아웃
router.post("/logout", (req, res) => {
  req.logout(() => {
    //요청받은 세선 삭제
    req.session.destroy();
    //쿠키를 값을 삭제한 상태로 돌려준다
    res.clearCookie("connect.sid");
    res.send("ok");
    // ok라는 메세지를 보내고 다시 hoem("/")으로 주소를 이동해라
    res.redirect("/");
  });
});

module.exports = router;
