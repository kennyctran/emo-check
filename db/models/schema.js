const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, index: true, unique: true },
  ratings: [
    {
      date: Date,
      entry: String,
      entryTitle: String,
      emotionalRating: Number,
      week: { type: String, index: true, unique: false },
    },
  ],
});

const User = model("User", userSchema);

exports.User = User;
