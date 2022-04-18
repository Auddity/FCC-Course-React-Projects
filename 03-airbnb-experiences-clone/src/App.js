import './css/App.css';
import data from './components/data';
import Nav from './components/Nav';
import Main from './components/Main';
import Cards from "./components/Cards";

function App() {
  const cardEls = data.map(card => {
    return <Cards 
      key={card.id}
      // card={card}
      {...card}
    />
  });
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
      <section className="cardContainer">
        {cardEls}
      </section>
    </div>
  );
}

export default App;
