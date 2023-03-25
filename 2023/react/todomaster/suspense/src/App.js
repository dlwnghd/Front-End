import { Suspense, lazy } from "react";
import "./App.css";
import UserSkeleton from "./components/Skeletons/user.skeleton";
import { ErrorBoundary } from "react-error-boundary";
import ApiCustomError from "./apis/@error";
// import UserList from './components/UserList';
const UserList = lazy(() => import("./components/UserList"));

const RenderLoading = () => <p style={{ fontSize: "300px" }}>Loading...</p>;
function App() {
  return (
    <Suspense fallback={<UserSkeleton />}>
      <ErrorBoundary fallback={<div>에러발생!</div>}
      onError={(error)=>{
        const {response} = error;
        const err = new ApiCustomError(response.data, response.status);
        alert(err);
      }}>
        <UserList />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
