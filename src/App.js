import React, { useState } from "react";
import EmoApp from "./components/EmoApp";
import History from "./components/History";
import Greeting from "./components/Greeting";
import Home from "./components/Home";
import Clock from "./components/Clock";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Indigo from "@material-ui/core/colors/Indigo";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Blue from "@material-ui/core/colors/Blue";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Darker Grotesque", "Open Sans", "sans-serif"],
  },
  palette: {
    primary: {
      main: Blue[100],
      light: Blue[50],
      dark: Blue[300],
    },
    secondary: {
      main: blueGrey[50],
      light: "#ffffff",
      dark: blueGrey[200],
    },
    background: {
      default: Indigo[500],
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App() {
  // TODO: Add state to keep track of time of day for theme?
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container justify="flex-end">
          <Nav />
          <div style={{ width: "30px" }}>{""}</div>
        </Grid>
        <Grid container justify="center">
          <Switch>
            <Route exact path="/">
              <div className="Home-Container" style={{ width: "65vw" }}>
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
              </div>
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}
