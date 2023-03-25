// 모든 Axios의 코어가 될 것이다.
// 단일 책임 원칙을 지키기위해서 독립적으로 만들 것이다.
// 모듈화와 재사용 가능성을 왜 하는지 생각하고
// 어떻게 나눌 수 있는지 생각해보아라

import axios from "axios";
import { useAuth } from "contexts/auth";
import TokenService from "repository/TokenService";
import AuthApi from "./authApi";

// 의존성 역전 원칙
/**
 * 기본 디폴트 값을 설정
 */
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  // 프론트엔드 웹 스토리지의 쿠키를 백엔드 서버와 공유 가능
  headers: {
    //              ⬇️ 보안 아이템
    Authorization: `Bearer ${TokenService.getToken()}`,
  },
});

Axios.interceptors.request.use(
  /**${TokenService.getToken()}
   * config가 있다면(error가 없다면)
   */
  (config) => {
    const access_token = TokenService.getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }
    return config;
  },

  /**
   * error가 생긴다면
   */
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  /**
   * 성공했을 때
   */
  (response) => {
    return response;
  },
  /**
   * 실패했을 때
   */
  async (error) => {
    const auth = useAuth();
    if (error.response.status === 401) {
      await AuthApi.logout();
      auth.logout();
    }

    const originalRequest = error.config;
    //                                      ⬇️ 이게 false이면 이라는 조건 추가 => 무한 재요청을 막기 위해
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await Axios.post(`/user/jwt`);
      if (res.status === 200) {
        const token = res.data.data;
        TokenService.setToken(token);
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return Axios(originalRequest);
      }

      /*
      const res = 백엔드에서 refresh token으로 access_token을 응답받는 주고
                  axios.post("/jwtRefresh")

      1. refreshToken이 쿠키로 관리되고 있다면
        보낼 필요가 없다. 백엔드와 프론트엔드에서 쿠키값을 공유할 수 있음

      2. 로컬스토리지, 세션스토리지, 웹쿠키(공유하지 않는다는 전제)
      
      ⬇️ 예시중 하나
      axios.post("/jwtReFresh", {
        refresh_token: RefreshTokenService.getToken();
      })

      ===> access_token이 전달될 것임
        const accessToken = res.data.token
      TokenServer.setToken(accessToken); ⬅️ 화면이 리랜더링 될 필요가 없기 때문에 useAuth()를 사용하지 않은 것임

      Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return Axios(originalRequest)
      */
    }
    // 그외의 다른 에러들은 던져줌
    return Promise.reject(error);
  }
);
