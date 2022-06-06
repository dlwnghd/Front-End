const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const router = express.Router();

const { User, Post } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
        ],
      });
      res.status(200).json(user);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, desc) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (desc) {
      return res.status(401).send(desc.reason);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.log(loginError);
        return next(loginError);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.send("ok");
});

router.post("/", async (req, res, next) => {
  try {
    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailCheck) {
      return res.status(403).send("이미 사용 중인 이메일 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 11);
    const singupUser = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    res.status(201).send("회원가입 완료\n" + singupUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
