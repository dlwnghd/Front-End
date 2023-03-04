// Axios 불러오기
import { Axios } from "./core";

const PATH = "/todo";

const TodoApi = {
  async getTodo() {
    const res = await Axios.get(PATH);
    return res;
  },
  addTodo({title, content}) {
    console.log(title);
    console.log(content);
    return Axios.post(PATH, { title, content });
  },
  updateTodo(id, content, state) {
    return Axios.put(PATH + "/" + id, { content, state });
  },
  deleteTodo(id) {
    return Axios.delete(PATH + "/" + id);
  },
};

export default TodoApi;
