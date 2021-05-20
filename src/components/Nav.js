import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  return {
    link: {
      color: theme.palette.primary.main,
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      transition: "all 0.1s ease",
      "&:hover": {
        color: theme.palette.secondary.light,
      },
    },
    icon: {
      fontSize: "1.5rem",
      padding: "5px",
    },
  };
});

export default function Nav() {
  const classes = useStyles();
  return (
    <Breadcrumbs color="secondary" aria-label="breadcrumb">
      <RouterLink to="/" className={classes.link}>
        <Grid container>
          {/* <HomeRoundedIcon className={classes.icon} /> */}
          <Typography>home</Typography>
        </Grid>
      </RouterLink>
      <RouterLink to="/history" className={classes.link}>
        {/* <CalendarTodayRoundedIcon className={classes.icon} /> */}
        <Typography>history</Typography>
      </RouterLink>
    </Breadcrumbs>
  );
}
