import './App.css';
import ContextBarContextProvider from './context/ContextBar';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <ContextBarContextProvider className="App">
      <Header/>
      <Home/>
    </ContextBarContextProvider>
  );
}

export default App;
