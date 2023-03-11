import TokenService from "repository/TokenService";

const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext();

// 어디서든 useAuth만 사용하면 Auth를 사용할 수 있음
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(()=> {
    // 만약에 웹 스토리지에 token이 남아 있다면
    const token = TokenService.getToken();
    if(token){
        setAccessToken(token);
    }
  },[])

  const login = (token) => {
    TokenService.setToken(token);
    setAccessToken(token);
  };

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