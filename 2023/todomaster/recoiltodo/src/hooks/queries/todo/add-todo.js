import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { addModalAtom } from "atoms/ui.atom";
import { QUERY_KEY } from "consts/query-key";
import { useSetRecoilState } from "recoil";

const useAddTodo = () => {
  const setAddModal = useSetRecoilState(addModalAtom);
  const queryClient = useQueryClient();

  return useMutation((todo) => TodoApi.addTodo(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.GET_TODO);
      // 개발자가 원할 때 새로운 요청을 할 수 있는 로직
      setAddModal(false);
    },
  });
};
export default useAddTodo;
