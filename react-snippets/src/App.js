// Coders Guild : Sumit Lahiri

import { hot } from 'react-hot-loader'
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import './App.css';

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

const App = () => {

  const classes = useStyles();
  const [startedEditing, updateEditSataus] = useState(false)
  const [onSelectEve, updateOnSelectEve] = useState(false)
  const [editText, updateEditText] = useState("Click to Edit")
  const textInput = useRef(null); 

  return (
    <div 
      className="App">
      <header className="App-header">
      <p>
          <strong>Select & Update text dynamically : </strong>
      </p>
      <p className="codes">
          <code>React useRef()/useState() & onMouseOver Events</code>
      </p>
        {
          startedEditing ? 
          <form 
            className={classes.root} 
            noValidate 
            autoComplete="off">
            <TextField 
              label="Press Enter to Submit" 
              value={editText} 
              ref={textInput}
              placeholder={editText}
              onMouseOver={(e) => {
                e.target.select()
              }}
              onChange={(e) => {
                updateEditText(e.target.value);
              }}
              onKeyPress={(e) => {
                updateEditText(e.target.value)
                if(e.keyCode === 13 || e.which === 13) {
                  e.target.value === '' ? alert("Text Cant be Empty !") : updateEditSataus(false)
                } 
              }}
              variant="outlined" />
          </form> : 
          <div onClick={(e) => {
            e.preventDefault();
            updateEditSataus(true)
          }}>
            {editText}
          </div>
        }
        {
          !onSelectEve ? 
                  <Button
                  variant="outlined"
                  size="large" color="primary"
                  className={classes.button}
                  startIcon={<GitHubIcon />}
                  onClick={(e) => {
                    updateOnSelectEve(true)
                    window.open('https://github.com/codersguild/being-fullstack/blob/master/react-snippets/src/App.js')
                  }}
                >
                  Get Snippet
                </Button> :
                <Button
                  variant="outlined"
                  size="large" color="secondary"
                  className={classes.button}
                >
                  Link Opened
                </Button>
        }
      </header>
    </div>
  );
}

export default hot(module)(App);