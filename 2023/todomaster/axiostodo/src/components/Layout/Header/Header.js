// 기본 Header가 될 것임
// Header는 여러 종류가 될 수 있음

import { Axios } from "apis/core";
import axios from "axios";
import { useAuth } from "contexts/auth";
// import TokenService from "repository/TokenService";

function BasicHeader() {
  const auth = useAuth();

  const onLogOut = async () => {
    await Axios.logout();
    auth.logout();
  };

  const onRefresh = async () => {
    const res = await Axios.post(`/user/jwt`);
    console.log(res);
  };

  return (
    <>
      HEADER
      <button onClick={onRefresh}>리프레시</button>
      <button onClick={onLogOut}>
        {auth.accessToken ? "로그아웃" : "로그인"}
      </button>
    </>
  );
}
export default BasicHeader;
