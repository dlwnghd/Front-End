const TOKEN_KEY = "access_token";

const TokenService = {
    // set (token 생성)
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