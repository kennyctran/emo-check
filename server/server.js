const express = require("express");
const morgan = require("morgan");
const path = require("path");
const controller = require("./controllers");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

app.post("/api/submit", controller.submit);
app.get("/api/history", controller.viewHistory);
app.get("/api/week", controller.viewWeek);

module.exports = app;
