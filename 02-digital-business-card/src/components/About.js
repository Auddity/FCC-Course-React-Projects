import React from "react";
import { EmailBtn, LinkedInBtn } from './Buttons.js';

const About = () => {
  return (
    <main className="main">
      <div className="personInfo">
        <h1 className="name">Johnathan Doe</h1>
        <p className="position">Frontend Developer</p>
        <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">johnathandoe.website</a>
      </div>
      <div className="linkContainer">
        <EmailBtn />
        <LinkedInBtn />
      </div>
      <div className="blurb">
        <h2 className="title">About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and accessable. I try to keep up my skills in JavaScript, React, and CSS. I enjoy leanring best practices, and am always looking for new things to experiment with.</p>
      </div>
      <div className="blurb">
        <h2 className="title">Interests</h2>
        <p>I enjoy reading, writing, and hiking. I have a particular interest in sound. Having worked as an audio engineer and sound effects editor.</p>
    </div>
    </main>
  )
}

export default About;