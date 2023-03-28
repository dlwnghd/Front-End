import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { QUERY_KEY } from "consts/query-key";

const useDeleteTodo = () => {
  const client = useQueryClient();
  return useMutation(({ id }) => TodoApi.deleteTodo(id), {
    // 낙관적 삭제
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEY.GET_TODO);
    },
    onError: () => {},
  });
};
export default useDeleteTodo;
