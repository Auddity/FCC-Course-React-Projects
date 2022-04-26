import React from 'react';
import '../css/Header.css';
import image from '../images/Troll Face.png';

const Header = () => {
  return (
    <header className="Header">
      <div className="title-ctnr">
        <img src={image} alt="troll face" />
        <h1 className="title">Meme Generator</h1>
      </div>
      <div className="sec-title-ctnr">
        <h2 className="second-title">React Course - Project 3</h2>
      </div>
    </header>
  )
}

export default Header;