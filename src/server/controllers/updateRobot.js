const Robot = require("../../database/models/Robot");

const updateRobot = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const updatedRobot = await Robot.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (updatedRobot) {
      res.status(200).json({ updatedRobot });
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code(400);
    next(error);
  }
};

module.exports = updateRobot;
