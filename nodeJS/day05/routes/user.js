const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../mdoels");

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

module.exports = router;
