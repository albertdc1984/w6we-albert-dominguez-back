const express = require("express");
const cors = require("cors");
const createRobot = require("../controllers/createRobot");
const deleteOneRobot = require("../controllers/deleteRobot");
const getAllRobots = require("../controllers/getAllRobots");
const getOneRobot = require("../controllers/getOneRobot");

const app = express();
const router = express.Router();
app.use(cors());

router.get("/", getAllRobots);
router.get(`/:idRobot`, getOneRobot);
router.post("/create", createRobot);
router.put("/update");
router.delete("/delete/:idRobot", deleteOneRobot);

module.exports = router;
