import React from "react";
import image from "../images/person1.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={image} alt="portrait" />
    </header>
  )
}

export default Header