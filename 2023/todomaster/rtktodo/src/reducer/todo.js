import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// value
/**
 * api 요청을 보내고 응답이 오기까지
 * @param {boolean} loading - 로딩여부 (로딩중:true / 로딩완료:false)
 * @param {boolean} done - 완료여부 (완료:true / 미완료:false)
 * @param {Object} err - 에러여부 (에러:에러 메세지✉️ / ❌에러:null)
 */
const initialState = {
	todos: [],
	addTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	getTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	updateTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	deleteTodoState: {
		loading: false,
		done: false,
		err: null,
	},
}

// reducer					⬇️ createAction, reduxThunk 같은 기능을 모두 포함
export const todoSlice = createSlice({
	name: 'todo',
	initialState, // 기본값
	extraReducers: builder => {
		// add todos

		// 🟡 추가 로딩(pending 상태)
		builder.addCase(addTodo.pending, state => {
			state.addTodoState.loading = true
		})

		// 🟢 추가 성공(fulfilled 상태)
		builder.addCase(addTodo.fulfilled, (state, action) => {
			state.todos.unshift(action.payload)
			state.addTodoState.loading = false
			state.addTodoState.done = true
			state.addTodoState.err = null
		})

		// 🔴 추가 실패(rejected 상태)
		builder.addCase(addTodo.rejected, (state, action) => {
			state.addTodoState.loading = false
			state.addTodoState.done = true
			state.addTodoState.err = action.payload
		})

		//get todos

		//update todos

		//delete todos
	},
})

/**
 * Todo 추가
 */
export const addTodo = createAsyncThunk('todo/addTodo', async todo => {
	const res = await axios.post('/api/todo', todo)
	return res.data
})

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
	return null
})

export const updateTodo = createAsyncThunk('todo/updateTodo', async () => {
	return null
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async () => {
	return null
})

/*
dispatch(요청) -- 미들웨어(thunk, addTodo) -- dispatch(대기중) --- reducer (ㅇ) -- 대기중에 맞는 비즈니스 로직 실행 (loading = true)

---- 비동기 종료 후

미들웨어 - dispatch(성공/실패) - reducer (ㅇ) --- 성공이나 실패 비즈니스 로직 실행
*/
