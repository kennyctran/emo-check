const app = require("./server.js");
require("dotenv").config();
const port = process.env.PORT || 2101;

app.listen(port, () => {
  console.log(`Now listening to server on port ${port}`);
});
