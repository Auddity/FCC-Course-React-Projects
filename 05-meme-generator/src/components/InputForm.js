import React from "react";
import '../css/InputForm.css';
import image from '../images/Get a new meme image.png'

const Form = () => {
  return (

    <form action="" className="form" id="form">
      <div className="input-ctnr">
        <input className="input" type="text" />
        <input className="input" type="text" />
      </div>
      <button type="submit">
        <img src={image} alt="" />
      </button>
    </form>
  )
}

export default Form;