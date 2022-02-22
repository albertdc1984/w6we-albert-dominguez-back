const Robot = require("../../database/models/Robot");

const updateRobot = async (req, res, next) => {
  const { _id } = req.body;

  try {
    const newRobot = await Robot.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    if (newRobot) {
      res.status(200).json({ newRobot });
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
