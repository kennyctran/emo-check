const Promise = require("bluebird");
const mongoose = require("mongoose");
mongoose.promise = Promise;
require("dotenv").config();

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
const { User } = require("./models/schema");

const db = (async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to DB at ${DB_NAME}`);
    // await User.create({
    //   username: "Test username",
    //   ratings: [
    //     {
    //       date: new Date(),
    //       entry: "This is a test entry",
    //       entryTitle: "Initial day",
    //       emotionalRating: 7,
    //     },
    //   ],
    // });
    return mongoose.connection;
  } catch (err) {
    console.log(`Could not conect to DB at ${DB_URI}`);
    return mongoose.connection;
  }
})();

module.exports = db;
