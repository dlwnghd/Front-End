const express = require('express');
const router = express.Router();
const { Post, User } = require("../models");
const { isLoggedin, isNotLoggedin } = require("../middleware");

// 모든 게시글 조회
router.get("/", async (req, res, next) => {
    try{
        const where = {};
        const posts = await Post.findAll({
            where,
            liit:10, // 10개만 찾아오겠습니다.
            order: [["createAt", "DESC"]], // 생성날짜 기준으로 내림차순
            include:[
                {
                    model: User,
                    attributes: ["id", "name"]  // 게시글과 관련된 작성자 이름과 아이디를 가지고와라
                }
            ]

        })
        res.status(200).json(posts);    // 스테이터스 200을 보내고 json형태로 posts를 보내라
    } catch (err) {
        console.log(err);
        next(err);
    }
});
// 시퀄라이즈 최대의 장점은 쿼리문 없이 데이터를 저장하고 조회하고 갱신하고 삭제할 수 있다


// 게시글 등록
// 로그인이 되어있어야 합니다. 로그인한 사용자 정보를 게시글을 작성한 사람으로 데이터를 가져오기 위해
router.post("/", isLoggedin, async (req, res) => {
    try{
        // find 찾는다 => db에서 데이터를 찾을 때
        // create 만든다 => db에 데이터를 넣을 때
        // update   갱신
        // destroy  삭제
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id // 패스포트에서 해석해 담긴 user의 id = 로그인한 사용자만 접근 가능
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [
                {
                    model: User,
                    attributes: ["id", "name"],
                },
            ],
        });
        res.status(201).json(fullPost);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

// 게시글 수정
// param = url을 통해 가져올 수 있는 값 www.oooooo.com/post/3/ ----> /post/:post:id로 가지고 올 수 있다.
// 하지만, router로 /post가 기본 값이기 때문에 /:postid로만으로 param의 정보를 req.param으로 가져올 수 있다.

// query도 존재한다
// www.ooooo./post/?postid=3/
// req.query.postid로 가지고 올 수 있음
// 보내야하는 데이터가 여러개일 경우가 많기 때문에 보통은 가독성도 좋은 query를 많이 사용하긴 한다

// 프론트에서 백엔드로 요청을 보낼 때 그럼 어떻게 보내면 되는가
// url => 주소(x)
// axios(`백엔드주소/?postid=${data.postid}`, data) :: query
// axios(`백엔드주소/${data.postid},) :: param
// axios(`백엔드주소/, data) :: body


// post/asd/
router.patch("/:postId", isLoggedin, async (req, res, next) => {});

module.exports = router;