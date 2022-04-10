import React from 'react';
import images from './images.js';
import '../css/grid.css';


const Main = () => {
  return (
    <main className="main">
      <div className="gridContainer">
        { images.map(({ id, title, src, alt }) => <img key={id} src={src} title={title} alt={alt} />) }
      </div>
    </main>
  )
}

export default Main;