const { updateUser } = require("../model");

module.exports = async (req, res) => {
  try {
    const data = req.body;
    await updateUser(data);
    res.status(201).send("Got it!");
  } catch (err) {
    res.status(404).send("Could not update");
  }
};
