const debug = require("debug")("robots:server");
const express = require("express");
const morgan = require("morgan");

const app = express();

const serverUp = (port) => {
  const server = app.listen(port, () => {
    debug(`Server listening on http://localhost:${port}`);
  });
  server.on("error", (error) => {
    debug(`Error on server; `, error.message);
  });
};
app.use(morgan("dev"));
module.exports(serverUp);
