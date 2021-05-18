const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  ratings: [
    {
      date: Date,
      entry: String,
      entryTitle: String,
      emotionalRating: Number,
    },
  ],
});

const User = model("User", userSchema);

exports.User = User;
