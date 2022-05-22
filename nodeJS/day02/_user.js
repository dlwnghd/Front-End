const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("회원가입 완료");
});

router.get("/login", (req, res) => {
  res.send("로그인 완료");
});

router.get("/logOut", (req, res) => {
  res.send("로그아웃 완료");
});

module.exports = router;
