import React from "react";
import { useState } from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';

export default function App() {
  const [ darkMode, setdarkMode ] = useState(false)
  const toggleDarkMode = () => {
    setdarkMode(prev => prev = !prev)
  }
  return (
    <div className="container">
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Main
        darkMode={darkMode}
      />
    </div>
  )
}