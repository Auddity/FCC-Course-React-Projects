import React, {useState} from "react";
import '../css/InputForm.css';
import '../css/Display.css';
import image from '../images/Get a new meme image.png';
import memesData from '../data.js';

const Form = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);
  
  const getMemeImage = (e) => {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme(prevState => ({
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
        <img src={meme.randomImage} alt="meme" />
      </section>
    </div>
  )
}

export default Form;