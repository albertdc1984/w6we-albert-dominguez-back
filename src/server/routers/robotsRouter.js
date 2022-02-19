const express = require("express");
const Robot = require("../../database/models/Robot");

const router = express.Router();

router.get("/robots", async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
  res.status(200);
});
router.get(`/robots/:idRobot`, async (req, res) => {
  const robot = await Robot.find();
  res.json({ robot });
  res.status(200);
});
router.post("/robots/create", async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);
  res.status(201);
  res.json(createdRobot);
});
router.put("/robots/update");
router.delete("/robots/delete/:idRobot");

module.exports = router;
