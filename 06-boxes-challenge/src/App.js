import { useState } from 'react';
import './App.css';
import boxes from './boxes.js';
import Box from './Box';

function App() {
  const [squares, setSquares] = useState(boxes);

  const toggle = id => {
    setSquares(prev => {
      return prev.map(square => {
        return square.id === id 
          ? {...square, on: !square.on}
          : square;
      })
    })
  }

  const squareEl = squares.map(square => (
    <Box 
      id={square.id}
      key={square.id} 
      on={square.on} 
      toggle={toggle}/>
  ))

  return (
    <div className="App">
      {squareEl}
    </div>
  );
}

export default App;
