const { getUserWeek } = require("../model");

module.exports = async (req, res) => {
  try {
    const userResults = await getUserWeek(req.query.username, req.query.week);
    res.send(userResults);
  } catch (err) {
    res.status(404).send("Could not retrieve user data");
  }
};
