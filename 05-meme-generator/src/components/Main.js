import React from "react";
import '../css/Main.css';
import Form from './InputForm';
import Display from './Display';

const Main = () => {
  return (
    <main className="Main">
      <Form />
      <Display />
    </main>
  )
}

export default Main;