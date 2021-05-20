const { User } = require("../../db/models/schema.js");
const moment = require("moment");

module.exports = {
  async updateUser({
    username,
    date,
    entry,
    entryTitle,
    emotionalRating,
    week,
  }) {
    try {
      await User.updateOne(
        { username: username },
        {
          $push: {
            ratings: { date, entry, entryTitle, emotionalRating, week },
          },
        }
      );
    } catch (err) {
      console.log(err);
      throw new Error("updateError");
    }
  },

  async getUserHistory(username) {
    try {
      const user = await User.findOne({ username });
      return user;
    } catch (err) {
      console.error(err);
      throw new Error("Could not find user");
    }
  },

  async getUserWeek(username, week) {
    const user = await User.findOne({ username }).lean();
    user.ratings = user.ratings.filter((rating) => rating.week == week);
    return user;
  },
};
