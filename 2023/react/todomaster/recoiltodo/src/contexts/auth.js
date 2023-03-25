import TokenService from "repository/TokenService";

const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext();

/**  
어디서든 useAuth를 사용하면 AuthContext를 사용할 수 있음
*/
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(TokenService.getToken());

  useEffect(() => {
    // 만약에 웹 스토리지에 token이 남아 있다면
    const token = TokenService.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  /**
   * 로그인 : 토큰 생성
   */
  const login = (token) => {
    TokenService.setToken(token);
    setAccessToken(token);
  };

  /**
   * 로그아웃 : 토큰 삭제
   */
  const logout = () => {
    TokenService.removeToken();
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

/*
privateRoute (접근권한)
eslint, prettier, husky
redux - toolkit

내일 8시~10시
*/
