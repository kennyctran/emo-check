import React, { useState } from "react";
import EmoApp from "./components/EmoApp";
import History from "./components/History";
import Greeting from "./components/Greeting";
import Home from "./components/Home";
import Clock from "./components/Clock";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  // TODO: Add state to keep track of time of day for theme?

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <Switch>
          <Route exact path="/">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Home>
                <Greeting />
                <Clock />
                <EmoApp />
              </Home>
            </Grid>
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
