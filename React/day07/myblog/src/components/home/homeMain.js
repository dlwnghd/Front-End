import React from "react";
import styled from "styled-components";
import Post from "./post/post";
import PostForm from "./post/postForm";

const HomeMain = () => {
  return (
    <StyledWrap>
      <PostForm />
      <Post />
    </StyledWrap>
  );
};
export default HomeMain;

const StyledWrap = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
