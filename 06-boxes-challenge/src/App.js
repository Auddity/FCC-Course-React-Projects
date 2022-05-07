import { useState } from 'react';
import './App.css';
import boxes from './boxes.js';
import Box from './Box';

function App() {
  const [squares, setSquares] = useState(boxes);

  const squareEl = squares.map(square => (
    <Box key={square.id} on={square.on}/>
  ))

  return (
    <div className="App">
      {squareEl}
    </div>
  );
}

export default App;
