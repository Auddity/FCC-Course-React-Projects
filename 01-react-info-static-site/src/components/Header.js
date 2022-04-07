import React from 'react';
import logo from '../assets/logo192.png';

export default function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img src={logo} alt="React Logo" />
        <h1 className="title">
          ReactFacts
        </h1>
      </div>
      <div className="projectNameCntnr">
        <h2>
          React Course - Project 1
        </h2>
      </div>
    </header>
  )
}