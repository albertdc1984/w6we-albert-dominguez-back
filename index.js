require("dotenv").config();
const debug = require("debug")("robots:");
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.SERVER_PORT || 3005;

debug("que dices loco");
const serverUp = (ports) => {
  const server = app.listen(port, () => {
    debug(`Server listening on http://localhost:${ports}`);
  });
  server.on("error", (error) => {
    debug(`Error on server; `, error.message);
  });
};

app.use(morgan("dev"));
app.use(express.json());

serverUp(port);
