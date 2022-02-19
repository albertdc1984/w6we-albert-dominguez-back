require("dotenv").config();

const debug = require("debug")("robots:");

const express = require("express");
const morgan = require("morgan");

const app = express();
const serverUp = require("./server/index");
const dbConnect = require("./database");
const router = require("./server/routers/robotsRouter");

const port = process.env.PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

debug("que dices loco");
(async () => {
  await serverUp(port);
  await dbConnect(mongoConnection);
})();

app.use("/", router);
app.use(morgan("dev"));
app.use(express.json());
