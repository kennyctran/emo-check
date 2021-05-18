const { getUserHistory } = require("../model");

module.exports = async (req, res) => {
  try {
    const username = req.query.username;
    const results = await getUserHistory(username);
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send("Could not retrieve user data");
  }
};
