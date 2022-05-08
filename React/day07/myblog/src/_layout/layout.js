import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
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
          <Link to="/login">로그인</Link>
        </div>
        <Styledinfo>
          성용님 | <button>로그아웃</button>
        </Styledinfo>
      </StyledNav>
      <div> {children} </div>
    </>
  );
};
export default Layout;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;

  & a {
    padding-top: 0.3rem;
    text-decoration: none;
    font-size: 0.875rem;
    color: #666;
  }

  & span {
    font-size: 1.5rem;
    font-weight: 900;
    color: #4f5681;
  }
`;

const Styledinfo = styled.div`
  font-size: 0.875rem;
  color: #666;
  cursor: default;

  & button {
    border: none;
    padding-top: 0.3rem;
    font-size: 0.875rem;
    color: #666;
    background: none;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }
`;
