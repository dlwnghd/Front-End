import Counter from "./components/counter/counter";
import ContextProvider from "./components/context/user";
import User from "./components/user";

function App() {
  return (
    <ContextProvider>
      <>
        {/* <Counter /> */}
        <User />
      </>
    </ContextProvider>
  );
}

export default App;
