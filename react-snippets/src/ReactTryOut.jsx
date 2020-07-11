// Codersguild : Sumit Lahiri <lahiri.devs@gmail.com>
import { hot } from 'react-hot-loader'
import { useCustomHook } from './customHooks'
import GitHubIcon from '@material-ui/icons/GitHub';
import 'react-toastify/dist/ReactToastify.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

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

const ReactTryOut = () => {

  console.log("Custom Hook")
  useCustomHook(5000)
  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <pre>Hello World !!</pre>
      </header>
    </div>
  );
}

export default hot(module)(ReactTryOut);