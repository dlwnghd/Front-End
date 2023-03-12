import Layout from "components/Layout";
import NotFoundPage from "pages/404";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import TodoPage from "../pages/Todo";
import PrivateRoute from "./private";

// App.js에서 routing 했던 path를 배열로 관리
/**
 * @param "/" - 기본 경로
 * @param "todo" - todo 경로
 * @param "*" - 그 외 경로(404)
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader : 나중에 백엔드랑 소통할 때 사용함

    // 자식 데이터 추가
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        // 아래는 로그인이 된 사람만 가능한 컴포넌트들
        element: <PrivateRoute />,
        children: [
          {
            path: "todo",
            element: <TodoPage />,
          },
        ],
      },
      // ⬇️ 404페이지 생성 방법1.
      // {
      //   path: "*",
      //   element: <NotFoundPage />,
      // },
    ],
  },
  // ⬇️ 404페이지 생성 방법2.
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
