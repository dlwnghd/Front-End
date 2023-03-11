import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";
import router from "./routes/routing";
import AuthProvider from "contexts/auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
