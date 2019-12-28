import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  firstName: "Robbie",
  lastName: "Gay"
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  return (
  <p>Hi my name is {formatName(user)}</p>
  );
}

export default App;
