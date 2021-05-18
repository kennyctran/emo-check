const { User } = require("../../db/models/schema.js");

module.exports = {
  async updateUser({ username, date, entry, entryTitle, emotionalRating }) {
    try {
      await User.updateOne(
        { username: username },
        {
          $push: { ratings: { date, entry, entryTitle, emotionalRating } },
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
};
