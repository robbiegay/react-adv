import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <p>Hello my name is {props.name}</p>
}

function App() {
  return (
  <Welcome name="Robbie" />
  );
}

export default App;
