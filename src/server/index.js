const debug = require("debug")("robots:server");
const express = require("express");
const morgan = require("morgan");
const router = require("./routers/robotsRouter");

const app = express();

const serverUp = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      debug(`Check te robot list at http://localhost:${port}/robots`);
      resolve();
    });
    server.on("error", (error) => {
      debug(`Error on server; `, error.message);
      reject();
    });
  });

app.use("/robots", router);
app.use(morgan("dev"));
module.exports = serverUp;
