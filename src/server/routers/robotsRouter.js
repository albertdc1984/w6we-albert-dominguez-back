const express = require("express");

const createRobot = require("../controllers/createRobot");
const getAllRobots = require("../controllers/getAllRobots");
const getOneRobot = require("../controllers/getOneRobot");

const router = express.Router();

router.get("/", getAllRobots);
router.get(`/:idRobot`, getOneRobot);
router.post("/create", createRobot);
router.put("update");
router.delete("/delete/:idRobot");

module.exports = router;
