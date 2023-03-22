import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";
import router from "./routes/routing";
import AuthProvider from "contexts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

function App() {
  const queryClient = new QueryClient();
  // {
  //   defaultOptions: {
  //     queries: {
  //       cacheTime:
  //     }
  //   }
  // }
  
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
export default App;
