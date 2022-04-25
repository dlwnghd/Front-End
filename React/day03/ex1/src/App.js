import './App.css';
import Hello from './components/hello';

function App() {
  const user = "오렌지";

  const style = {
    color: "deepskyblue"
  }

  return (
    <>
      <Hello name="김사과"/>
      <Hello name="반하나" color="yellow"/>
      <Hello name={user} style={style} islover/>
    </>
  );
}

export default App;
