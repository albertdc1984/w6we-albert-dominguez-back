const mongoose = require("mongoose");
const debug = require("debug")("robots:db:");

const dbConnect = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(`Couldn't connect to the database: ${error.message}`));
        return;
      }
      debug("Connected to DB");
      resolve();
    });
  });

module.exports = dbConnect;
