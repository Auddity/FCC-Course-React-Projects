import { useState } from 'react';
import './App.css';
import boxes from './boxes.js';
import Box from './Box';

function App() {
  const [squares, setSquares] = useState(boxes);

  const toggle = id => {
    setSquares(prev => {
      const newSquares = []
      for(let square in prev) {
        const currSquare = prev[square]
        if(currSquare.id === id) {
          const updatedSquare = {
            ...currSquare,
            on: !currSquare.on
          }
          newSquares.push(updatedSquare)
        } else {
          newSquares.push(currSquare)
        }
      }
      console.log(newSquares);
      return newSquares
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
