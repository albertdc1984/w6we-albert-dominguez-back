require("dotenv").config();
const debug = require("debug")("robots:server");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const router = require("./routers/robotsRouter");
const routerUser = require("./routers/usersRouter");

const app = express();

const serverUp = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });
    server.on("error", (error) => {
      debug(`Error on server; `, error.message);
      reject(error);
    });
  });

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", router);
app.use("/users", routerUser);

app.use(notFoundError);
app.use(generalError);

module.exports = serverUp;
