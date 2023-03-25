import { rest } from 'msw'
import { todoMock } from '__mock__/datas/todo.data'

/**
 * todo 추가
 */
export const addTodo = rest.post('/api/todo', async (req, res, ctx) => {
	let title
	let content

	await req.json().then(data => {
		title = data.title
		content = data.content
	})

	return res(
		ctx.status(200),
		ctx.json({
			id: Math.floor(Math.random() * 100000),
			title,
			content,
			state: false,
		}),
	)
})

/**
 * todo 읽기
 */
export const readTodo = rest.get('/api/todo', (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(todoMock))
})

/**
 * todo 수정
 */
export const updateTodo = rest.put('/api/todo/:id', async (req, res, ctx) => {
	const { id } = req.params
	let title
	let content
	let state

	await req.json().then(data => {
		title = data.title
		content = data.content
		state = data.state
	})

	return res(
		ctx.status(200),
		ctx.json({
			id,
			title,
			content,
			state,
		}),
	)
})

/**
 * todo 삭제
 */
export const deleteTodo = rest.delete('/api/todo/:id', (req, res, ctx) => {
	const { id } = req.params
	return res(ctx.status(200), ctx.json({ id }))
})
