import React from "react";
import '../css/InputForm.css';
import image from '../images/Get a new meme image.png';
import memeData from '../data.js';

const Form = () => {
  
  const handleClick = e => {
    e.preventDefault();

    const { memes } = memeData.data;
    const getRandomNum = () => Math.floor(Math.random() * memes.length);
    const index = getRandomNum();
    const { url:imgUrl } = memes[index];
    
    console.log(imgUrl);
  }

  return (

    <form action="" className="form" id="form">
      <div className="input-ctnr">
        <input 
          className="input" 
          type="text" 
          placeholder="Top Text"/>
        <input 
          className="input" 
          type="text" 
          placeholder="Bottom Text"/>
      </div>
      <button 
        className="button" 
        type="submit"
        onClick={handleClick}>
        <img src={image} alt="get new meme" />
      </button>
    </form>
  )
}

export default Form;