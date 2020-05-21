// Coders Guild : Sumit Lahiri
import { hot } from 'react-hot-loader'
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios'
import './App.css';

const static_colors = [
  "#00FFFF",	
  "#E0FFFF",	
  "#00CED1",	
  "#40E0D0",	
  "#48D1CC",	
  "#AFEEEE",	
  "#7FFFD4",	
  "#B0E0E6",	
  "#5F9EA0",	
  "#4682B4",	
  "#6495ED",	
  "#00BFFF",	
  "#1E90FF",	
  "#ADD8E6",	
  "#87CEEB",	
  "#87CEFA",	
  "#191970",	
  "#000080",	
  "#00008B",	
  "#0000CD",	
  "#0000FF",	
  "#4169E1"
]	

const colors = () => {
  return "rgb(" + Math.floor(Math.random() * 200) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 150) + ")" 
}

const CreateGrid = (m, n, w, random) => {
  let grid = []
  for (var i = 0; i < m; i += 1) {
    let squares = []    
    for(var j = 0; j < n; j += 1) {
      squares.push({
        id : 124 * i + 63 * j + 90,
        x : w * i,
        y : w * j,
        fill : random ? colors() : static_colors[Math.floor(Math.random() * static_colors.length)]
      })
    }
    grid.push(squares)
  }
  return grid
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const ReactUpdate = () => {

  const [grid, updateGrid] = useState([[]])
  const [static_grid, updateStaticGrid] = useState([[]])
 
  useEffect(
    () => 
      {
        const interval = setInterval(() => {
          updateGrid(CreateGrid(90, 10, 21, 0))
        }, 20)
        return () => clearInterval(interval);
      }, [grid]
  )

  useEffect(
    () => 
      {
        const interval = setInterval(() => {
          updateStaticGrid(CreateGrid(90, 10, 21, 0))
        }, 500)
        return () => clearInterval(interval);
      }, [static_grid]
  )

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <pre>
          How fast can React.js update a render in DOM? 
        </pre>
        <pre>
          Each grid box is an individual fragment being updated with a random color
        </pre>
        <pre>
          every 20ms 🚀🚀 with useEffect() hook.
        </pre>
        <svg width="1900" height="250" viewBox="0 0 1900 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                {
                  grid.map(row => row.map(sq => {
                    return <rect key={sq.id} width="20" height="20" x={sq.x} y={sq.y} fill={sq.fill} />
                  }))
                }
              </svg>
        <pre>
          Usual Web-Socket updates at 500ms intervals will look like this 🐌 . 
        </pre>
        <svg width="1900" height="250" viewBox="0 0 1900 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                {
                  static_grid.map(row => row.map(sq => {
                    return <rect key={sq.id} width="20" height="20" x={sq.x} y={sq.y} fill={sq.fill} />
                  }))
                }
              </svg>
        <pre>
          Grid Pattern inspired by GitHub <Button
                  variant="outlined"
                  size="large" color="secondary"
                  startIcon={<GitHubIcon />}
                  onClick={(e) => {
                    window.open('https://github.com/codersguild/being-fullstack/blob/master/react-snippets/src/ReactUpdate.js')
                  }}
                >
                </Button> 😍
        </pre>
      </header>
    </div>
  );
}

export default hot(module)(ReactUpdate);