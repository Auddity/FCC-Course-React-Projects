import React, {useState, useEffect} from "react";
import '../css/InputForm.css';
import '../css/Display.css';
import image from '../images/Get a new meme image.png';

const Form = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = useState([]);
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, [])

  const getMemeImage = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme(prevState => ({
      ...prevState,
      randomImage: url
    }));
  }

  const handleMeme = e => {
    const {name, value} = e.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  return (
    <div>
      <form action="" className="form" id="form">
        <div className="input-ctnr">
          <input 
            className="input" 
            type="text" 
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleMeme}/>
          <input 
            className="input" 
            type="text" 
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleMeme}/>
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
        <h1 className="text">{meme.topText}</h1>
        <h2 className="text">{meme.bottomText}</h2>
      </section>
    </div>
  )
}

export default Form;