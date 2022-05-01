import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer/_index";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension"
import {createLogger} from "redux-logger";
import rootSaga from "../saga/_index";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,sagaMiddleware))
);

export const sagaRun = () => {
    sagaMiddleware.run(rootSaga);
};

export default store;