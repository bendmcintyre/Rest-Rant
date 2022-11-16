const router = require("express").Router();
const places = require("../models/places.js");
const place = require("../models/places.js");

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "/images/town.jpeg";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
