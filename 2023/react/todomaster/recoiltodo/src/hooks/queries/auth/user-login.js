import { useMutation } from "@tanstack/react-query";
import AuthApi from "apis/authApi";
import { useAuth } from "contexts/auth";

const useUserLogin = () => {
  const auth = useAuth();
  // body에 데이터가 있는 경우
  return useMutation(({ email, password }) => AuthApi.login(email, password), {
    onSuccess: (res) => {
      auth.login(res.data.token);
    },
    // onError
    // onSettled (성공과 실패의 유무 상관없이)
  });
};
export default useUserLogin;
