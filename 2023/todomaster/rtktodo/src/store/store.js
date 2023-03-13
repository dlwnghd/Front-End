import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'reducer'
import logger from 'redux-logger'

/**
 * 외부에서 사용할 store
 */
export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development', // true(사용), false(미사용) => 개발자 모드의 여부
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger]
			/*위와 같이 기존의 미들웨어를 가지고 오지 않으면 logger만 사용으로 덮어버림 */
		}
		return defaultMiddleware()
	},
})
