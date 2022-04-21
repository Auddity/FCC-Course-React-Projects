import './css/App.css';
import data from './data'
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  const cardEls = data.map(info => {
    return <Cards 
      key={info.id}
      {...info}
    />
  });

  return (
    <div className="App">
      <Header />
      <main className="main">
          {cardEls}
      </main>
    </div>
  );
}

export default App;