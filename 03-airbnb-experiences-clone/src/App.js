import './css/App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
      <section className="cardContainer">
        <Cards />
      </section>
    </div>
  );
}

export default App;
