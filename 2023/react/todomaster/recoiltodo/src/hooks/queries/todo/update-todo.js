import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { QUERY_KEY } from "consts/query-key";

const useUpdateTodo = () => {
  const client = useQueryClient();
  return useMutation(({ id, data }) => TodoApi.updateTodo(id, data), {
    // 낙관적 업데이트
    onSuccess: (res) => {
      const { data } = res.data;
      client.cancelQueries([QUERY_KEY.GET_TODO]);
      // 저장되어있는 캐싱 데이터 삭제할 뿐 재요청❌
      // 재요청 해도 됩니다. => 대신 사용자가 잠깐 깜빡이는 것을 봐야한다.

      // 지워진 공간에 낙관적으로 성공한 결과값을 다시 셋팅 해줌
      client.setQueryData([QUERY_KEY.GET_TODO], (oldData) => {
        let updateData = oldData.data.data.find((todo) => todo.id === data.id);
        updateData.content = data.content;
        updateData.state = data.state;
        return oldData;
      });
    },
  });
};
export default useUpdateTodo;

/*
update 성공 => 데이터 변경 => 요청을 새로해야함, 하지만 우리는 이미 결과값을 알고 있기 때문에
재용청하지 않아도 데이터를 수정할 수 있음
*/
