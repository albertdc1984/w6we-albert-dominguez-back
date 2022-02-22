const debug = require("debug")("robots:server");

const serverUp = async (port, app) =>
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

module.exports = serverUp;
