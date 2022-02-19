const express = require("express");
const Robot = require("../../database/models/Robot");

const router = express.Router();

router.get("/robots", async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
  res.status(200);
});
router.get("/robots/:idRobot");
router.post("/robots/create");
router.put("/robots/update");
router.delete("/robots/delete/:idRobot");

module.exports = router;
