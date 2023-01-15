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
      PostId: parseInt(req.params.postId, 10),
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
      PostId: parseInt(req.params.postId, 10),
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
