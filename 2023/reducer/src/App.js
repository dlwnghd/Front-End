import ContextProvider from "./components/context/user";
import Counter from "./components/counter/counter";
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
