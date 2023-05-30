import React from 'react';
import { useState } from "react";




const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addData = () => {
    setTodos([...todos, userInput])
  }
 const clearData = () => {
    setTodos([])
 } 
  return <div>
    <h1>To do app</h1>
    <input type = "text" onChange = {(event) => setUserInput(event.target.value)}></input>
    <button onClick = {()=> addData()}>Add</button>
    <button onClick = {() => clearData()}>Clear</button>
    <ul>
      {
        todos.map((anything) => <li>{anything}</li>)
      }
    </ul>
  </div>
 }

 export default App;