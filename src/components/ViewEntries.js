import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  date: {
    fontSize: "0.8rem",
    flexBasis: "33.33%",
    flexShrink: 0,
  },
});

export default function ViewEntries({ accordionData, forAria }) {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${forAria}`}
        id={`panel${forAria}`}
      >
        <Typography className={classes.date}>
          {moment(accordionData.date).format("MMM Do [,] YY")}
        </Typography>
        <Typography>{accordionData.entryTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{`Emotional Rating ${accordionData.emotionalRating}: ${accordionData.entry}`}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
