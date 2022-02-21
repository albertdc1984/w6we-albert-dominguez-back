const express = require("express");

const createRobot = require("../controllers/createRobot");
const deleteOneRobot = require("../controllers/deleteRobot");
const getAllRobots = require("../controllers/getAllRobots");
const getOneRobot = require("../controllers/getOneRobot");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getAllRobots);
router.get(`/:idRobot`, getOneRobot);
router.post("/create", createRobot);
router.put("/update");
router.delete("/delete/:idRobot", auth, deleteOneRobot);

module.exports = router;
