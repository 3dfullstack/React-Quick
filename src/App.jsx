import React from 'react';
import ReactUpdate from './ReactUpdate'
import ReactEditLive from './ReactEditLive'

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
     <Switch>
        <Route exact path="/">
          <ReactUpdate />
        </Route>
        <Route exact path="/e/update">
          <ReactUpdate />
        </Route>
        <Route path="/f/edit">
          <ReactEditLive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;