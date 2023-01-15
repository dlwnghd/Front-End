import React, { useCallback } from "react";
import styled from "styled-components";
import moment from "moment";
import { usePrev } from "../../../hook/usePrev";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_POST_REQUEST,
  UPDATE_POST_REQUEST,
} from "../../../reducer/post";
import { useInput } from "../../../hook/useInput";

moment.locale("ko");
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [editPost, onToggleEditPost, setEditPost] = usePrev(false);
  const [commentBox, onToggleCommentBox] = usePrev(false);
  const { info } = useSelector((state) => state.user);
  const [content, onChangeContent] = useInput(post.content);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: {
        id: post.id,
      },
    });
  }, [post.id, dispatch]);

  const onUpdatePost = useCallback(() => {
    dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        postId: post.id,
        content: content,
      },
    });
    setEditPost((prev) => !prev);
  }, [content, post.id, dispatch]);

  return (
    <StyledPost>
      <div className="info">
        <div className="inner">
          <StyledAvatar src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
          <div className="name-date">
            <div className="name">{post.User.name}</div>
            <div className="date"> {moment().format("YYYY.MM.DD")}</div>
          </div>
        </div>
        <div>
          {info && info.id === post.User.id && (
            <button className="editBtn" onClick={onToggleEditPost}>
              수정
            </button>
          )}
          {info && info.id === post.User.id && (
            <button className="editBtn" onClick={onRemovePost}>
              삭제
            </button>
          )}
        </div>
      </div>
      {editPost ? (
        <>
          <textarea
            cols="80"
            row="5"
            value={content}
            onChange={onChangeContent}
          />
          <button className="editBtn updateBtn" onClick={onUpdatePost}>
            수정하기
          </button>
        </>
      ) : (
        <div className="content">{post.content}</div>
      )}
      <div className="comment" onClick={onToggleCommentBox}>
        <div className="total">댓글 {post.Comments.length}개</div>
        <div className="commentBtn">댓글 달기</div>
      </div>
      {commentBox && (
        <>
          {info && <CommentForm post={post} />}
          <Comment comment={post.Comments} postId={post.id} />
        </>
      )}
    </StyledPost>
  );
};
export default Post;

const StyledAvatar = styled.img`
  box-sizing: border-box;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  text-align: center;
`;

const StyledPost = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  padding: 1rem;

  & .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.6rem;
  }

  & .inner {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  & textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    resize: none;
    font-size: 0.875rem;
    color: #666;
  }

  & .name-date {
    display: inline-block;
    padding-left: 0.5rem;

    & .name {
      font-size: 0.875rem;
      color: #666;
    }

    & .date {
      font-size: 0.75rem;
      color: #999;
    }
  }

  & .editBtn {
    border: none;
    font-size: 0.75rem;
    color: #666;
    background: none;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }

  & .updateBtn {
    width: 100%;
    text-align: right;
    padding-top: 0.7rem;
    font-weight: bold;
  }

  & .content {
    box-sizing: border-box;
    padding: 1rem 0;
    font-size: 0.875rem;
    color: #666;
  }

  & .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    padding-top: 0.6rem;
    cursor: pointer;
    font-size: 0.75rem;
    color: #999;
  }
`;
