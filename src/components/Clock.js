import React from "react";
import useTime from "../custom/useTime";
import Grid from "@material-ui/core/Grid";

export default function Clock() {
  const [time] = useTime();
  return (
    <Grid container justify="center">
      <h2>{time}</h2>
    </Grid>
  );
}
