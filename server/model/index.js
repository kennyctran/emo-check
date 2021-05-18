const { User } = require("../../db/models/schema.js");

module.exports = {
  async updateUser({ username, date, entry, entryTitle, emotionalRating }) {
    try {
      const user = await User.updateOne(
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
};
