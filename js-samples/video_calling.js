import React, { useState } from 'react'
import Jitsi from 'react-jitsi'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(10),
      width: '25ch',
    },
  },
}));

function App() {

  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [roomName, setRoomName] = useState('')
  const [onCall, setOnCall] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h2>Pluto Meetings 🚀</h2>
          {
            onCall ? 
            <Jitsi 
              roomName={roomName} 
              displayName={displayName} 
              password={password}
              containerStyle={{ 
                width: '1200px', 
                height: '800px' }}
            /> : 
            <>
              <h4>Your quest to a meeting solutions end here 😃</h4>
              <TextField 
                type='text' 
                value={roomName} 
                onChange={e => setRoomName(e.target.value)} 
                required
                id="outlined-required"
                label="Room Name"
                placeholder="Required [Share it]"
                variant="outlined"
              />
              <hr></hr>
              <TextField 
                type='text' 
                value={displayName} 
                onChange={e => setDisplayName(e.target.value)}
                required
                id="outlined-required"
                label="Your Name"
                placeholder="Required"
                variant="outlined"
              />
              <hr></hr>
              <TextField 
                type='text' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required
                id="outlined-password-input"
                label="Password"
                placeholder="Required [Share it]"
                variant="outlined"
              />
              <hr></hr>
              <Button 
                variant="outlined" 
                color="secondary" 
                size="large"
                onClick={() => {
                  if(displayName === "") alert("Name Empty ?");
                  else if(password === "") alert("Secure your meeting by adding a password ?");
                  else if(roomName === "") alert("No Room Name ");
                  else setOnCall(true)
                }}
              > Start 👍 
              </Button>
              <hr></hr>
              <h6>Meetings Done Right ✔️</h6>
            </>
          }
        </>
      </header>
    </div>
  );
}

export default App;