import React from 'react';
import profileimage from "./img/yoda.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my reat App</h1>
      <h2>hello</h2>
      <img src={profileimage} alt="profile-image"/>
    </div>
  );
}

export default App;
