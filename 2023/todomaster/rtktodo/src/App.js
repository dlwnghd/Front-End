import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { worker } from '__mock__/browser'
import Routing from './routes/Routing'
import GlobalStyles from './styles/global'
import { theme } from './styles/theme'
import { store } from 'store/store'

function App() {
	// npx msw init public/
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routing />
			</ThemeProvider>
		</Provider>
	)
}

export default App
