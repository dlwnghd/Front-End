import { useQuery } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { QUERY_KEY } from "consts/query-key";

const useGetTodo = (params) => {
  const { data, error, status, isLoading } = useQuery(
    [QUERY_KEY.GET_TODO],
    () => TodoApi.getTodo(params),
    {
      // suspense: true,   // Suspense 사용하려면 true
      suspense: true,
      refetchOnWindowFocus: false,
      retry: 1,
      cacheTime: 1000 * 5 * 60,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: () => {},
    }
  );

  return {data, error, status, isLoading};
};

export default useGetTodo