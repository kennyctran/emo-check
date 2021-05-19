import React, { useState } from "react";
import Beaming from "../images/Beaming.svg";
import Smiling from "../images/Smiling.svg";
import Neutral from "../images/Neutral.svg";
import Unamused from "../images/Unamused.svg";
import Sad from "../images/Sad.svg";
import Happiest from "../images/Happiest.svg";
import SlightlyHappier from "../images/SlightlyHappier.svg";
import Anxious from "../images/Anxious.svg";
import Crying from "../images/Crying.svg";
import { TextField, Button } from "@material-ui/core";
import useEmotionSelector from "../custom/useEmotionSelector";
import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const useStyles = makeStyles((theme) => {
  return {
    emoji: {
      height: "auto",
      width: "10%",
      "min-height": "50px",
      cursor: "pointer",
      "border-radius": "50%",
      transition: "all 0.1s ease",
      "&:hover": {
        transform: "scale(1.5)",
      },
    },
    divider: {
      height: "20px",
    },
    emotionContainer: {
      width: "70%",
      backgroundColor: theme.palette.primary.dark,
      borderRadius: "15px",
      boxShadow: `3px 1px 10px 20px ${theme.palette.primary.dark}`,
    },
  };
});

export default function EmoApp() {
  // Will need to handle grabbing username
  const [emotion, setEmotion] = useEmotionSelector(5);
  const [entry, setEntry] = useState("");
  const [entryTitle, setEntryTitle] = useState("");
  const classes = useStyles();

  const handleSubmit = async () => {
    if (entryTitle) {
      await axios.post("/api/submit", {
        username: "kenny",
        date: new Date(),
        entry,
        entryTitle,
        emotionalRating: emotion,
      });
      // Step 1: Change screen to loading
      setEmotion.setNeutral();
      setEntry("");
      setEntryTitle("");
    } else {
      alert("Must include a title");
    }
    // Step 4: Display thank you page?
  };

  return (
    <div className={classes.emotionContainer}>
      <Grid container alignItems="center" justify="space-around" wrap="nowrap">
        <img
          src={Happiest}
          alt="Happiest Face"
          className={classes.emoji}
          onClick={setEmotion.setHappiest}
        />
        <img
          src={Beaming}
          alt="Beaming Face"
          className={classes.emoji}
          onClick={setEmotion.setBeaming}
        />
        <img
          src={SlightlyHappier}
          alt="Slightly Happier Face"
          className={classes.emoji}
          onClick={setEmotion.setSlightlyHappier}
        />
        <img
          src={Smiling}
          alt="Smiling Face"
          className={classes.emoji}
          onClick={setEmotion.setSmiling}
        />
        <img
          src={Neutral}
          alt="Neutral Face"
          className={classes.emoji}
          onClick={setEmotion.setNeutral}
        />
        <img
          src={Unamused}
          alt="Unamused Face"
          className={classes.emoji}
          onClick={setEmotion.setUnamused}
        />
        <img
          src={Anxious}
          alt="Anxious Face"
          className={classes.emoji}
          onClick={setEmotion.setAnxious}
        />
        <img
          src={Sad}
          alt="Sad Face"
          className={classes.emoji}
          onClick={setEmotion.setSad}
        />
        <img
          src={Crying}
          alt="Crying Face"
          className={classes.emoji}
          onClick={setEmotion.setCrying}
        />
      </Grid>
      <div className={classes.divider + " spacer"}></div>
      <form>
        <Grid container justify="center" wrap="nowrap">
          <Grid item xs={5}>
            <TextField
              variant="outlined"
              autoComplete="false"
              multiline={true}
              rows={6}
              rowsMax={6}
              fullWidth={true}
              type="textarea"
              size="medium"
              id="entry"
              type="textarea"
              name="entry"
              aria-label="entry"
              label="What's going on?"
              color="secondary"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
          </Grid>
          <div className="spacer" style={{ width: "80px" }}></div>
          <div>
            <Grid
              item
              xs={12}
              container
              direction="column"
              justify="space-between"
            >
              <TextField
                variant="outlined"
                autoComplete="false"
                aria-label="entryTitle"
                id="entryTitle"
                name="entryTitle"
                value={entryTitle}
                label="Main Focus?"
                required={true}
                onChange={(e) => setEntryTitle(e.target.value)}
                fullWidth={true}
                color="secondary"
              />
              <div style={{ height: "30px" }}>{""}</div>
              <Button
                startIcon={<AddRoundedIcon />}
                size="large"
                onClick={handleSubmit}
                variant="outlined"
                color="secondary"
              >
                Log Emo-Check
              </Button>
            </Grid>
          </div>
        </Grid>
      </form>
      <div className={classes.divider + " spacer"}></div>
    </div>
  );
}
