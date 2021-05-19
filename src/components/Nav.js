import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";

const useStyles = makeStyles({
  link: {
    display: "flex",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    "&:visited": {
      color: "purple",
    },
    "&:hover": {
      color: "blue",
    },
  },
  icon: {
    padding: "5px",
  },
});

export default function Nav() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <RouterLink to="/" className={classes.link}>
        <HomeRoundedIcon className={classes.icon} />
        home
      </RouterLink>
      <RouterLink to="/history" className={classes.link}>
        <CalendarTodayRoundedIcon className={classes.icon} />
        history
      </RouterLink>
    </Breadcrumbs>
  );
}
