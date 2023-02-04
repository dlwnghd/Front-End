import Layout from "components/Layout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import TodoPage from "../pages/Todo";

// App.js에서 routing 했던 path를 배열로 관리
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
        path: "todo",
        element: <TodoPage />,
      },
    ],
  },
//   path가 user일때 다른 컨포넌트를 넣을 수도 있다.
//   {
//     path: "/user"
//   }
]);

export default router;