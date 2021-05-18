import React, { useState } from "react";
import useName from "../custom/useName";
import Grid from "@material-ui/core/Grid";

export default function Greeting() {
  const [message] = useState("Hello, ");
  const name = useName();
  return (
    <Grid container justify="center">
      <h1>{message + name}</h1>
    </Grid>
  );
}
