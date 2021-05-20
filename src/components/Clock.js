import React from "react";
import useTime from "../custom/useTime";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spacer: {
    width: "15px",
  },
  timeContainer: {
    width: "100%",
    display: "flex",
  },
  timeSpacer: {
    width: "50%",
  },
  time: {
    width: "50%",
    fontWeight: "400",
    fontSize: "6rem",
  },
});

export default function Clock() {
  const [time] = useTime();
  const classes = useStyles();
  return (
    <Grid container justify="center" style={{ width: "100%" }}>
      <div className={classes.timeContainer}>
        <div className={classes.timeSpacer + " spacer"}></div>
        <Grid container justify="center">
          <Typography color="secondary" className={classes.time} variant="h2">
            {time.slice(0, 8)}
          </Typography>
        </Grid>
        <div className={classes.timeSpacer + " spacer"}></div>
      </div>
    </Grid>
  );
}
