// Axios 불러오기
import { Axios } from "./core";

const PATH = "/todo";

const TodoApi = {
  /**
   * 모든 Todo를 가져오는 메소드
   */
  async getTodo() {
    const res = await Axios.get(PATH);
    return res;
  },
  /**
   * {title, content}를 받아와 Todo를 작성해주는 메소드
   */
  addTodo({ title, content }) {
    return Axios.post(PATH, { title, content });
  },
  /**
   * id와 {content, state}를 받아와 Todo를 업데이트 해주는 메소드
   */
  updateTodo(id, { content, state }) {
    return Axios.put(PATH + `/${id}`, { content, state });
  },
  /**
   * id를 받아와 Todo를 삭제 해주는 메소드
   */
  deleteTodo(id) {
    return Axios.delete(PATH + `/${id}`);
  },
};

export default TodoApi;
