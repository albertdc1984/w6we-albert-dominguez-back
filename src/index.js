require("dotenv").config();

const debug = require("debug")("robots:");

const chalk = require("chalk");

const serverUp = require("./server/serverUp");
const dbConnect = require("./database");
const app = require("./server");

const port = process.env.PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

debug("que dices loco");
(async () => {
  try {
    await serverUp(port, app);
    await dbConnect(mongoConnection);
  } catch (error) {
    debug(chalk.bgRed.white(error.message));
  }
})();

module.exports = mongoConnection;
