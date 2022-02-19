const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  velocity: {
    type: Number,
  },
  resistance: {
    type: Number,
  },
  year: {
    type: Date,
  },
  name: {
    type: String,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
