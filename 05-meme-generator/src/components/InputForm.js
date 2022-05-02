import React, {useState} from "react";
import '../css/InputForm.css';
import '../css/Display.css';
import image from '../images/Get a new meme image.png';
import memeData from '../data.js';

const Form = () => {
  const [memeImage, setMemeImage] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const allMemeImages = memeData.data.memes;
  
  const getMemeImage = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    const { url } = allMemeImages[randomNum];
    setMemeImage(prevState => ({
      ...prevState,
      randomImage: url
    }));
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

      <section className="Display" >
        <img src={memeImage.randomImage} alt="meme" />
      </section>
    </div>
  )
}

export default Form;