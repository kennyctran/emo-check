import React, { useState } from "react";
import EmoApp from "./components/EmoApp";
import History from "./components/History";
import Greeting from "./components/Greeting";
import useName from "./custom/useName";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  // Add state to keep track of time of day
  // Add state to determine message to send to Greeting
  const [message, setMessage] = useState("Hello, ");
  const name = useName();

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
            <Home>
              <Greeting message={message + name} />
              <EmoApp />
            </Home>
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
