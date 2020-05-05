import { hot } from 'react-hot-loader'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {

  const [startedEditing, updateEditSataus] = useState(true)

  useEffect(() => {

  })
  
  return (
    <div className="App">
      <header className="App-header">
        React App
      </header>
    </div>
  );

}

export default hot(module)(App);
