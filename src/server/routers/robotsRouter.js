const express = require("express");

const createRobot = require("../controllers/createRobot");
const deleteOneRobot = require("../controllers/deleteRobot");
const getAllRobots = require("../controllers/getAllRobots");
const getOneRobot = require("../controllers/getOneRobot");

const router = express.Router();

router.get("/", getAllRobots);
router.get(`/:idRobot`, getOneRobot);
router.post("/create", createRobot);
router.put("/update");
router.delete("/delete/:idRobot", deleteOneRobot);
router.get();

module.exports = router;
