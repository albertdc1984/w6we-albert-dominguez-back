const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  velocity: {
    type: String,
    required: true,
  },
  resistance: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: false,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
