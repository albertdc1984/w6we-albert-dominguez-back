require("dotenv").config();

const debug = require("debug")("robots:");

const express = require("express");
const morgan = require("morgan");

const app = express();
const serverUp = require("./server/index");

const port = process.env.SERVER_PORT || 3005;

debug("que dices loco");
(async () => {
  await serverUp(port);
})();

app.use(morgan("dev"));
app.use(express.json());
