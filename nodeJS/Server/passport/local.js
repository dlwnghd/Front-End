const passport = require("passport");
const {Strategy: LocalStrategy} = require("passport-local");
const bcrypt = require("bcrypt");
const {User} = require("../models");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                //이메일 여부 판단
                where: {email},
            });

            if (!user) {
                return done(null, false, {reason: "존재하지 않는 사용자입니다."});
                //done(error, 성공, 클라이언트 에러)
            }

            const result = await bcrypt.compare(password, user.password);
            // 비밀번호 비교 입력받은 비밀번호와 DB에 저장된 사용자의 비밀번호를 비교

            if (result) {
                return done(null, user);
                // req.user로 로그인 한 사용자의 정보를 가지고 올 수 있습니다 req.body req.param req.query (x) ==>
                // req.user면 로그인 정보다
            }

            return done(null, false, {reason: "비밀번호가 일치하지 않습니다."});
        } catch (err) {
            console.log(err);
            return done(err);
        }
    }));
};
