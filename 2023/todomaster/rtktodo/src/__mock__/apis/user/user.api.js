import { rest } from 'msw'

/**
 * 로그인
 */
export const login = rest.post('/api/user/login', async (req, res, ctx) => {
	let email
	let password

	await req.json().then(data => {
		email = data.email
		password = data.password
	})

	if (!(email === 'test@test.com' && password === 'testtest'))
		return res(ctx.status(401))

	return res(
		ctx.status(200),
		ctx.json({
			token: 'token',
		}),
	)
})

/**
 * 로그아웃
 */
export const logout = rest.post('/api/user/logout', (req, res, ctx) => {
	return res(
		ctx.status(200),
		ctx.json({
			message: 'logout success',
		}),
	)
})

/**
 * 회원가입
 */
export const signUp = rest.post('/api/user/sign', (req, res, ctx) => {
	return res(
		ctx.status(200),
		ctx.json({
			message: 'signup success',
		}),
	)
})
