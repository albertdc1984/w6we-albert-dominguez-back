const express = require("express");

const Robot = require("../../database/models/Robot");

const router = express.Router();

router.get("/", async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
  res.status(200);
});
router.get(`/:idRobot`, async (req, res) => {
  const { idRobot } = req.params;
  console.log(idRobot);
  const robot = await Robot.findById(idRobot);
  res.json({ robot });
  res.status(200);
});
router.post("/create", async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);
  res.status(201);
  res.json(createdRobot);
});
router.put("update");
router.delete("/delete/:idRobot");

module.exports = router;
