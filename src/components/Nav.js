import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    color: "black",
    textDecoration: "none",
    "&:visited": {
      color: "purple",
    },
    "&:hover": {
      color: "blue",
    },
  },
});

export default function Nav() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <RouterLink to="/" className={classes.link}>
        Home
      </RouterLink>
      <RouterLink to="/history" className={classes.link}>
        History
      </RouterLink>
    </Breadcrumbs>
  );
}
