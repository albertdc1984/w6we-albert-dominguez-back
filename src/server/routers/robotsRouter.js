const express = require("express");

const router = express.Router();

router.get("/robots", (req, res) => {
  res.status(200);
});
router.get("/robots/:idRobot");
router.post("/robots/create");
router.put("/robots/update");
router.delete("/robots/delete/:idRobot");

module.exports = router;
