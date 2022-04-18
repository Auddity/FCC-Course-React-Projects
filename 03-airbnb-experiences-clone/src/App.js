import './css/App.css';
import data from './components/data';
import Nav from './components/Nav';
import Main from './components/Main';
import Cards from "./components/Cards";

function App() {
  const cardEls = data.map(card => {
    return <Cards 
      portrait = {card.portrait}
      alt = {card.alt}
      rating = {card.rating}
      numReviews = {card.numReviews}
      loc = {card.loc}
      desc = {card.desc}
      cost = {card.cost}
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
