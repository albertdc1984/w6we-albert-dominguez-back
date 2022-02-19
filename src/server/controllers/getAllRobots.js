const Robot = require("../../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
  res.status(200);
};

module.exports = getAllRobots;
