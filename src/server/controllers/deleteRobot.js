const Robot = require("../../database/models/Robot");

const deleteOneRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findByIdAndDelete(idRobot);
    if (robot) {
      res.json(robot);
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

module.exports = deleteOneRobot;
