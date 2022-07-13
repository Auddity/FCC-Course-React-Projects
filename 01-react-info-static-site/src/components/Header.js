import React from 'react';
import logo from '../assets/logo192.png';

export default function Header(props) {
  return (
    <header
      className={props.darkMode ? 'dark' : ''}
    >
      <div className="logoContainer">
        <img src={logo} alt="React Logo" />
        <h1 className="title">
          ReactFacts
        </h1>
      </div>
      <div className="toggler">
        <p className='toggler--light'>Light</p>
        <div
          className='toggler--slider'
          onClick={props.toggleDarkMode}
        >
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </header>
  )
}