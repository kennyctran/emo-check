import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { isEmpty } from "lodash";

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
        <Typography>{accordionData.date}</Typography>
        <Typography>{accordionData.entryTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{accordionData.entry}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
