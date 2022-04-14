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
        <Cards 
          portrait="./images/KatieZaferes.png"
          alt=""
          rating={5.0}
          numReviews={6}
          loc="USA"
          desc="Lessons with Katie Zafares"
          cost={136}
        />
        <Cards 
          portrait="./images/wedding-photography 1.png"
          alt=""
          rating={5.0}
          numReviews={30}
          loc="USA"
          desc="Learn wedding photography"
          cost={125}
        />
        <Cards 
          portrait="./images/mountain-bike 1.png"
          alt=""
          rating={4.8}
          numReviews={2}
          loc="USA"
          desc="Group Mountain Biking"
          cost={50}
        />
      </section>
    </div>
  );
}

export default App;
