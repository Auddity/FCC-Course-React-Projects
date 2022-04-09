import React from "react";
import image from "../images/person1.jpg";
import { EmailBtn, LinkedInBtn } from './Buttons.js';

const Header = () => {
  return (
    <header className="header">
      <img src={image} alt="portrait" />
      <div className="pesonInfo">
        <h1 className="name">Johnathan Doe</h1>
        <p className="position">Frontend Developer</p>
        <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">johnathandoe.website</a>
      </div>
      <div className="linkContainer">
        <EmailBtn />
        <LinkedInBtn />
      </div>
    </header>
  )
}

export default Header