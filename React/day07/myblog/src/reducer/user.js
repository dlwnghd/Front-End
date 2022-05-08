import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { info } = useSelector((state) => state.user);

  return (
    <>
      <StyledNav>
        <div>
          <Link to="/">
            <span>MyBlog</span>
          </Link>
        </div>
        <div>
          <Link to="/sign">회원가입</Link>
        </div>
        <div>
          {!info ? (
            <Link to="/login">로그인</Link>
          ) : (
            <Styledinfo>
              {info.nickname} | <button>로그아웃</button>
            </Styledinfo>
          )}
        </div>
      </StyledNav>
      <div> {children} </div>
    </>
  );
};
export default Layout;
