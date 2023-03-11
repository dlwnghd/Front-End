import { RouterProvider } from "react-router-dom";
import createConfig from ''
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";
import Routing from "./routes/routing";
import { Provider } from "react-redux";
import { store } from "store/store";
import { worker } from "__mock__/browser";

function App() {
  const store = createConfig();

  if(process.env.NODE_ENV === "development"){
    worker.start()
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routing />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
