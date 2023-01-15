import './App.css';
import ContextAPI from './components/contextAPI'
import ContextProvider from './reducer';

function App() {
  return (
    <ContextProvider>
      <ContextAPI/>
    </ContextProvider>
  );
}

export default App;
