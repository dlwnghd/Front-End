// 기본 Header가 될 것임
// Header는 여러 종류가 될 수 있음

import { useAuth } from "contexts/auth";
// import TokenService from "repository/TokenService";

function BasicHeader() {
  const auth = useAuth();

  const onLogOut = () => {
    auth.logout();
  };

  return (
    <>
      HEADER
      <button onClick={onLogOut}>
        {auth.accessToken ? "로그아웃" : "로그인"}
      </button>
    </>
  );
}
export default BasicHeader;
