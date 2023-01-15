const express = require("express");
const router = express.Router();
const { Post, User, Comment, Reply } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const where = {};
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "name"],
            },
            {
              model: Reply,
              include: [
                {
                  model: User,
                  attributes: ["id", "name"],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch("/:postId", async (req, res, next) => {
  try {
    await Post.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.postId,
          UserId: req.user.id,
        },
      }
    );
    res.status(200).json({
      postId: parseInt(req.params.postId, 10),
      content: req.body.content,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// ex) post요청 localhost:3030/2/comment // body.content
router.post("/:postId/comment", async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
        {
          model: Reply,
          include: [
            {
              model: User,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 대댓글 ex) localhost:3030/2/1/reply  // cotnent
// 제목까지 보내야했다면 즉 어떠한 데이터를 추가로 보내고싶다면
/* 
시퀄라이즈 수정
1. models에 컬럼,필드명 추가
2. associate 관계가 있는지 다른 테이블
3. req.body.title 혹은
4. get으로 보낼거면 param , query에 담아서 받아오면 된다.
  params================================================================================ 
  (/:postId/:commentId/reply/:title)

  query==============================================================================
   (/) <-- /post
   (req.qury.postId) ===> localhost:3030/post?postid="x" ===> x값이 가져와진다
   (req.qury.commentId)
   (req.qury.title)
   ======================> localhost:3030/post?postId="x"&commentId="y"&title="z"/c
*/

/*router.post("/", async (req, res, next) => {
  try{
    const reply = await Reply.create({
      content: req.body.content,
      PostId: parseInt(req.query.postId),
      CommentId: parseInt(req.query.commentId)
      UserId: req.user.id,
    })
})*/
router.post("/:postId/:commentId/reply", async (req, res, next) => {
  try {
    const reply = await Reply.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId),
      CommentId: parseInt(req.params.commentId),
      UserId: req.user.id,
    });
    const fullReply = await Reply.findOne({
      where: { id: reply.id },
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
      ],
    });
    res.status(201).json(fullReply);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
// delete localhost:3030/2/2 ==> id가 2인 게시글의 id가 2인 댓글 삭제
router.delete("/:postId/:commentId", async (req, res, next) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.commentId,
        PostId: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({
      postId: parseInt(req.params.postId, 10),
      commentId: parseInt(req.params.commentId, 10),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId/:commentId/:replyId", async (req, res, next) => {
  try {
    await Reply.destroy({
      where: {
        id: req.params.replyId,
        PostId: req.params.postId,
        CommentId: req.params.commentId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({
      PostId: parseInt(req.params.postId, 10),
      CommentId: parseInt(req.params.commentId, 10),
      replyId: parseInt(req.params.replyId, 10),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
