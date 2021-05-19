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
import { TextField, Fab } from "@material-ui/core";
import useEmotionSelector from "../custom/useEmotionSelector";
import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const bigEmoji = {
  height: "100px",
  width: "100px",
};

const smallEmoji = {
  height: "50px",
  width: "50px",
};

const useStyles = makeStyles({
  smallEmoji: {
    height: "2rem",
    width: "2rem",
    "max-height": "40px",
    cursor: "pointer",
    "border-radius": "50%",
  },
  bigEmoji: {
    height: "5rem",
    width: "5rem",
    "max-height": "90px",
    cursor: "pointer",
    "border-radius": "50%",
  },
});

export default function EmoApp() {
  // Will need to handle grabbing username
  const [emotion, setEmotion] = useEmotionSelector(5);
  const [entry, setEntry] = useState("");
  const [entryTitle, setEntryTitle] = useState("");
  const classes = useStyles();

  const handleSubmit = async () => {
    // This confirms that we can send a request
    // const res = await axios.post("/api/submit", {
    //   username: "Test username",
    //   date: new Date(),
    //   entry: "static test entry",
    //   entryTitle: "static entry title",
    //   emotionalRating: emotion,
    // });
    alert("Request sent");
    // Step 1: Change screen to loading
    // Step 2: Send post request
    // Step 3: empty state
    // Step 4: Display thank you page?
  };

  return (
    <div className="Emotion-Container" style={{ "min-width": "100%" }}>
      <Grid container alignItems="center" justify="space-around">
        <img
          src={Happiest}
          alt="Happiest Face"
          // style={smallEmoji}
          className={classes.smallEmoji}
          onClick={setEmotion.setHappiest}
        />
        <img
          src={Beaming}
          alt="Beaming Face"
          // style={bigEmoji}
          className={classes.bigEmoji}
          onClick={setEmotion.setBeaming}
        />
        <img
          src={SlightlyHappier}
          alt="Slightly Happier Face"
          // style={smallEmoji}
          className={classes.smallEmoji}
          onClick={setEmotion.setSlightlyHappier}
        />
        <img
          src={Smiling}
          alt="Smiling Face"
          // style={bigEmoji}
          className={classes.bigEmoji}
          onClick={setEmotion.setSmiling}
        />
        <img
          src={Neutral}
          alt="Neutral Face"
          // style={smallEmoji}
          className={classes.smallEmoji}
          onClick={setEmotion.setNeutral}
        />
        <img
          src={Unamused}
          alt="Unamused Face"
          // style={bigEmoji}
          className={classes.bigEmoji}
          onClick={setEmotion.setUnamused}
        />
        <img
          src={Anxious}
          alt="Anxious Face"
          // style={smallEmoji}
          className={classes.smallEmoji}
          onClick={setEmotion.setAnxious}
        />
        <img
          src={Sad}
          alt="Sad Face"
          // style={bigEmoji}
          className={classes.bigEmoji}
          onClick={setEmotion.setSad}
        />
        <img
          src={Crying}
          alt="Crying Face"
          style={smallEmoji}
          onClick={setEmotion.setCrying}
        />
      </Grid>
      <form>
        <Grid container justify="center">
          {/* <label for="entryBody"></label>
        <textarea id="entryBody" name="entryBody"></textarea> */}
          <Grid item xs={5}>
            <TextField
              variant="outlined"
              autoComplete="false"
              multiline={true}
              rows={8}
              fullWidth={true}
              size="medium"
              type="textarea"
              label="entry"
              name="entry"
              placeholder="entry"
              helperText="entry"
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
                helperText="Entry Title"
                label="entryTitle"
                name="entryTitle"
                placeholder="Entry Title"
                value={entryTitle}
                onChange={(e) => setEntryTitle(e.target.value)}
                fullWidth={true}
              />
              <Fab variant="extended" onClick={handleSubmit}>
                Submit Emo
              </Fab>
            </Grid>
          </div>
        </Grid>
      </form>
    </div>
  );
}
