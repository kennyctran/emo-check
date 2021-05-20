import React, { useState } from "react";
import useName from "../custom/useName";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 0,
    fontSize: "10rem",
  },
});

export default function Greeting() {
  const [message] = useState("Hello, ");
  const name = useName();
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Typography variant="h1" color="secondary" className={classes.root}>
        {message + name}
      </Typography>
    </Grid>
  );
}
