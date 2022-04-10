import './css/App.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
