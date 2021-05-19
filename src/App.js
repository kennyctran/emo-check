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
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Darker Grotesque", "Open Sans", "sans-serif"],
  },
  // props: {
  //   MuiTypography: {
  //     variantMapping: {
  //       h1: "h1",
  //       h2: "h2",
  //       h3: "h3",
  //       h4: "h4",
  //       h5: "h5",
  //       h6: "h6",
  //       subtitle1: "span",
  //       subtitle2: "span",
  //       body1: "p",
  //       body2: "p",
  //     },
  //   },
  // },
});

export default function App() {
  // TODO: Add state to keep track of time of day for theme?
  return (
    <Router>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Router>
  );
}
