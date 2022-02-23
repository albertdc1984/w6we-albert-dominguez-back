const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");
const routerRobot = require("./routers/robotsRouter");
const routerUser = require("./routers/usersRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", routerRobot);
app.use("/users", routerUser);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
