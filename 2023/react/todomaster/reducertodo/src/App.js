import {RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';
import router from './routes/routing';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;