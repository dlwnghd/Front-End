import * as TodoApi from './todo/todo.api'
import * as UserApi from './user/user.api'

export const handler = [...Object.values(TodoApi), ...Object.values(UserApi)]
