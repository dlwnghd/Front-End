const TOKEN_KEY = "access_token";

/**
 * 토큰화 모듈
 */
const TokenService = {
  /**
   * set (token 생성)
   * @ 백엔드에서 토큰을 만들어달라고 요청하기
   */
  async setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  // get (token 가져오기)
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  // remove (토큰 삭제)
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default TokenService;