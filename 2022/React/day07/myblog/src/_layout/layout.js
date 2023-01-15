import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducer/user";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

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
              {info.nickname} | <button onClick={onLogout}>로그아웃</button>
            </Styledinfo>
          )}
        </div>
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
