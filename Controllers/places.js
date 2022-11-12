//Create and export code
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("GET /places");
});

module.exports = router;
