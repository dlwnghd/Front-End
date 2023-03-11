import { rest } from "msw";
import { todoMock } from "__mock__/datas/todo.data";

/**
 * 가상 todoAPI - addTodo
 */
export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;

  // 프론트에서 ⬇️아래와 같이 요청했을 것이다
  // axios.post('/api/todo', {title, content})

  const data = await req.json();
  title = data.title;
  content = data.content;

  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 10000000000),
      title,
      content,
      state: false,
    })
  );
});

/**
 * 가상 todoAPI - getTodo
 */
export const getTodo = rest.get("/api/todo", (req, res, ctx) => {
  // '/api/todo/:id'
  // const {id} = req.params;

  return res(ctx.status(200), ctx.json(todoMock));
});
