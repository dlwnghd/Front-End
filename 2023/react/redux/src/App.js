import { createStore } from "redux";
import { Provider } from "react-redux";

import User from "./components/user";
import { rootReducer } from "./reducer";
import reduxConfig from "./store/store";

function App() {
  // const store = createStore(rootReducer)
  const store = reduxConfig();

  /*
  1. development
    개발자용 (npm start)

  2. production
    npm build -> 생성된(번들링 된) -> 사용자가 보게 될 화면
   */

  /*
  1. rootReducer 파일을 생성
      reducer는 여러 파일이 생성 될 수 있으므로 reducer들을 하나로 합침 rootReducer가 필요하다
      export const rootReducer = combineReducers({})

  2. 비어있는 store 를 생성
    createStore()

  3. store에 reducer를 채워놨다
    createStore(rootReducer)

    store에 다양한 기능을 위하여 함수형태로 만들어줄 필요가 있음
    store -> store.js로 store를 빼서 함수형으로 만들었다.

    const reduxConfig = () => {
      const store = createStore(rootReducer);
        return store;
    }

  4. Provider 생성 (덮개)를 생성 app.js 에서 덮고 store 속성에 내가 만든 store 전달
    import { Provider } from "react-redux";

    ex)
        <Provider store={store}>
          <User />
        </Provider>

*/

  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
