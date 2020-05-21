// Codersguild : Sumit Lahiri <lahiri.devs@gmail.com>
import './App.css';
import axios from 'axios'
import { hot } from 'react-hot-loader'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import 'react-toastify/dist/ReactToastify.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, useRef } from 'react';

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

const ReactComponent = () => {

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">

      </header>
    </div>
  );
}

export default hot(module)(ReactComponent);