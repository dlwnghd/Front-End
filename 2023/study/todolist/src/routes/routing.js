import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import TodoPage from "../pages/Todo";

// App.js에서 routing 했던 path를 배열로 관리
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        // loader : 나중에 백엔드랑 소통할 때 사용함
    },
    {
        path: 'todo',
        element: <TodoPage />
    },
]);

export default router;