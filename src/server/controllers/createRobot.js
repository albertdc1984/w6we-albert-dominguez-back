const Robot = require("../../database/models/Robot");

const createRobot = async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);
  res.status(201);
  res.json(createdRobot);
};

module.exports = createRobot;
