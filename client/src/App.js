import React from 'react';
import Welcome from './pages/Welcome/Welcome';
import Game from './pages/Game/Game';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/game" component={Game} />
          <Route component={Welcome} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
