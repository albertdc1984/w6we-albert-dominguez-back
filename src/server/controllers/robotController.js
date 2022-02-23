const Robot = require("../../database/models/Robot");

const getAllRobots = async (req, res, next) => {
  try {
    const robots = await Robot.find();
    res.status(200).json({ robots });
  } catch (error) {
    next(error);
  }
};

const getOneRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findById(idRobot);
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

const createRobot = async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);

  res.json(createdRobot);
};

const deleteOneRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findByIdAndRemove(idRobot);
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

module.exports = {
  getAllRobots,
  getOneRobot,
  createRobot,
  deleteOneRobot,
  updateRobot,
};
