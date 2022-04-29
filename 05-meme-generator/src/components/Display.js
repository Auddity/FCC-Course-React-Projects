import React, { useState } from 'react';
import '../css/Display.css';
import memeData from '../data.js';

const Display = () => {
  const getRandomNum = () => Math.floor(Math.random() * memes.length);
  
  const { memes } = memeData.data;
  const index = getRandomNum();
  const { url:imgUrl } = memes[index];
  
  const [memeImage, setMemeImage] = useState('');
  
  const getMemeImage = () => {
    setMemeImage(imgUrl);
  }

  return (
    <section 
      className="Display"
      onClick={getMemeImage}
    >
      <img src={memeImage} alt="meme" />
    </section>
  );
};

export default Display;