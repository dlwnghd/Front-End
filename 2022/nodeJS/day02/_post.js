const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("글 조회 완료");
});

router.post("/", (req, res) => {
  res.send("글 등록 완료");
});

router.delete("/", (req, res) => {
  res.send("글 삭제 완료");
});

router.patch("/", (req, res) => {
  res.send("글 수정 완료");
});

module.exports = router;
