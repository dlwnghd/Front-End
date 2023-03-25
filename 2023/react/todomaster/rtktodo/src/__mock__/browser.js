import { setupWorker } from 'msw'
import { handler } from './apis/handler'

export const worker = setupWorker(...handler)
