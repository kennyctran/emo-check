import * as React from "react";
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

export default function EmoApp() {
  return (
    <div>
      <div>
        <img src={Happiest} alt="Happiest Face" height="50px" width="50px" />
        <img src={Beaming} alt="Beaming Face" height="100px" width="100px" />
        <img
          src={SlightlyHappier}
          alt="Slightly Happier Face"
          height="50px"
          width="50px"
        />
        <img src={Smiling} alt="Smiling Face" height="100px" width="100px" />
        <img src={Neutral} alt="Neutral Face" height="100px" width="100px" />
        <img src={Unamused} alt="Unamused Face" height="100px" width="100px" />
        <img src={Anxious} alt="Anxious Face" height="50px" width="50px" />
        <img src={Sad} alt="Sad Face" height="100px" width="100px" />
        <img src={Crying} alt="Crying Face" height="50px" width="50px" />
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
        />
        <Fab variant="extended">Submit Emo</Fab>
      </form>
    </div>
  );
}
