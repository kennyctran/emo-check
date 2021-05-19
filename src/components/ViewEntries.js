import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";

export default function ViewEntries({ accordionData }) {
  return (
    <Accordion
    // expanded={expanded === "panel1"}
    // onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1bh-content"
        // id="panel1bh-header"
      >
        <Typography>
          {moment(accordionData.date).format("MMM Do [,] YY")}
        </Typography>
        <Typography>{accordionData.entryTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{`Emotional Rating: ${accordionData.emotionalRating}\n${accordionData.entry}`}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
