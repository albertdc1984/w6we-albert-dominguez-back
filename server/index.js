const debug = require("debug")("robots:server:");

const serverUp = (port) => {
  const server = app.listen(port, () => {
    debug(`Server listening on http://localhost:${port}`);
  });
  server.on("error", (error) => {
    debug(`Error on server; `, error.message);
  });
};

module.exports(serverUp);
