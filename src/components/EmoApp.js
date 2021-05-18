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

const bigEmoji = {
  height: "100px",
  width: "100px",
};

const smallEmoji = {
  height: "50px",
  width: "50px",
};

export default function EmoApp() {
  // Will need to handle grabbing username
  const [emotion, setEmotion] = useEmotionSelector(5);
  const [entry, setEntry] = useState("");
  const [entryTitle, setEntryTitle] = useState("");

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
    <div>
      <div>
        <img
          src={Happiest}
          alt="Happiest Face"
          style={smallEmoji}
          onClick={setEmotion.setHappiest}
        />
        <img
          src={Beaming}
          alt="Beaming Face"
          style={bigEmoji}
          onClick={setEmotion.setBeaming}
        />
        <img
          src={SlightlyHappier}
          alt="Slightly Happier Face"
          style={smallEmoji}
          onClick={setEmotion.setSlightlyHappier}
        />
        <img
          src={Smiling}
          alt="Smiling Face"
          style={bigEmoji}
          onClick={setEmotion.setSmiling}
        />
        <img
          src={Neutral}
          alt="Neutral Face"
          style={smallEmoji}
          onClick={setEmotion.setNeutral}
        />
        <img
          src={Unamused}
          alt="Unamused Face"
          style={bigEmoji}
          onClick={setEmotion.setUnamused}
        />
        <img
          src={Anxious}
          alt="Anxious Face"
          style={smallEmoji}
          onClick={setEmotion.setAnxious}
        />
        <img
          src={Sad}
          alt="Sad Face"
          style={bigEmoji}
          onClick={setEmotion.setSad}
        />
        <img
          src={Crying}
          alt="Crying Face"
          style={smallEmoji}
          onClick={setEmotion.setCrying}
        />
      </div>
      <form>
        {/* <label for="entryBody"></label>
        <textarea id="entryBody" name="entryBody"></textarea> */}
        <TextField
          variant="outlined"
          autoComplete="false"
          multiline={true}
          size="medium"
          type="textarea"
          label="entry"
          name="entry"
          placeholder="entry"
          helperText="entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        {/* <label for="entryTitle"></label>
        <input type="text" id="entryTitle" name="entryTitle"></input> */}
        <TextField
          variant="outlined"
          autoComplete="false"
          helperText="Entry Title"
          label="entryTitle"
          name="entryTitle"
          placeholder="Entry Title"
          value={entryTitle}
          onChange={(e) => setEntryTitle(e.target.value)}
        />
        <Fab variant="extended" onClick={handleSubmit}>
          Submit Emo
        </Fab>
      </form>
    </div>
  );
}
