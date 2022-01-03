import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './TextField'


const data = {
  text: 'Hello',
  ok: true,
  int: 5,
  person:{
    name: 'John',
    age: 36
  }


}




function App() {
  return (
    <div className="App">
      <TextField text={data.text} ok={data.ok}/>
    </div>
  );
}

export default App;
