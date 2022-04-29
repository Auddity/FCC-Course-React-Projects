import React, {useState} from "react";
import '../css/InputForm.css';
import '../css/Display.css';
import image from '../images/Get a new meme image.png';
import memeData from '../data.js';

const Form = () => {
  
  const getRandomNum = () => Math.floor(Math.random() * memes.length);
  
  const { memes } = memeData.data;
  const index = getRandomNum();
  const { url:imgUrl } = memes[index];
  
  const [memeImage, setMemeImage] = useState('');
  
  const getMemeImage = (e) => {
    e.preventDefault();
    setMemeImage(imgUrl);
  }

  return (
    <div>
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
          onClick={getMemeImage}>
          <img src={image} alt="get new meme" />
        </button>
      </form>

      <section 
        className="Display"
        >
        <img src={memeImage} alt="meme" />
      </section>
    </div>
  )
}

export default Form;