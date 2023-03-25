import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./@root";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && composeWithDevTools(applyMiddleware(logger))
);
// rootReducer ---> 채워넣는다
// middleware 설정