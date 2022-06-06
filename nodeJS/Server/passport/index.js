// const passport = require("passport");
// const { User } = require("../models");
// const local = require("./local");

// module.exports = () => {
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
//   // 쿠키와 매칭할 유저의 id값을 저장

//   passport.deserializeUser(async (id, done) => {
//     // id를 통해 db에 있는 정보를 가지고옴
//     try {
//       const user = await User.findOne({ where: { id } });
//       done(null, user);
//     } catch (err) {
//       console.error(err);
//       done(err);
//     }
//   });
//   local();
// };
