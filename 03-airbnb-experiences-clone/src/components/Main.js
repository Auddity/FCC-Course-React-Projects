import React from 'react';
import images from './images.js';
import '../css/Main.css'
import '../css/grid.css';


const Main = () => {
  return (
    <main className="main">
      <div className="gridContainer">
        { images.map(({ id, title, src, alt }) => <img key={id} src={src} title={title} alt={alt} />) }
      </div>
      <h1>Online Experiences</h1>
      <p>Join unique interactive ativites led by one-of-a-kind hosts-all whith out leaving home.</p>
    </main>
  )
}

export default Main;