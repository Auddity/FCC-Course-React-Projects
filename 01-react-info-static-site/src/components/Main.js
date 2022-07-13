import React from "react";
import List from './List';

export default function Main(props) {
  console.log(props.darkMode)
  return (
    <main
      className={props.darkMode ? "dark" : ''}
    >
      <h1>Fun facts about React</h1>
      <List />
    </main>
  )
}