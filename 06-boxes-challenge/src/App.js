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
      key={square.id} 
      on={square.on} 
      toggle={() => toggle(square.id)}/>
  ))

  return (
    <div className="App">
      {squareEl}
    </div>
  );
}

export default App;
