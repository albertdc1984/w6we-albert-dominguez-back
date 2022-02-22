const express = require("express");
const {
  getAllRobots,
  getOneRobot,
  createRobot,
  updateRobot,
  deleteOneRobot,
} = require("../controllers/robotController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getAllRobots);
router.get("/:idRobot", getOneRobot);
router.post("/create", auth, createRobot);
router.put("/update/:idRobot", auth, updateRobot);
router.delete("/delete/:idRobot", auth, deleteOneRobot);

module.exports = router;
