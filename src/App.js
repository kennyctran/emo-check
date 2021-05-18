import * as React from "react";
import EmoApp from "./components/EmoApp";
import History from "./components/History";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
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
            <EmoApp />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
