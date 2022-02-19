const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  velocity: {
    type: String,
  },
  resistance: {
    type: String,
  },
  year: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
