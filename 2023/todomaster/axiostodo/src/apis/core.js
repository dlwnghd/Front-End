// 모든 Axios의 코어가 될 것이다.
// 단일 책임 원칙을 지키기위해서 독립적으로 만들 것이다.
// 모듈화와 재사용 가능성을 왜 하는지 생각하고
// 어떻게 나눌 수 있는지 생각해보아라

import axios from "axios";
import TokenService from "repository/TokenService";

// 의존성 역전 원칙
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${TokenService.getToken()}`,
  },
});
