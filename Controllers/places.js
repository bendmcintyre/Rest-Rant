const router = require("express").Router();

//Adding the places controller
router.get("/", (req, res) => {
  res.send("GET /places");
});

module.exports = router;
