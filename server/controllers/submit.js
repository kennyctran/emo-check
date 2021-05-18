module.exports = (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(201).send("Got it!");
};
