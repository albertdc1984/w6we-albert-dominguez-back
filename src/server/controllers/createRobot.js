const Robot = require("../../database/models/Robot");

const createRobot = async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);

  res.json(createdRobot);
};

module.exports = createRobot;
