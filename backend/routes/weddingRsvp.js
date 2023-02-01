const router = require("express").Router();
let WeddingRSVP = require("../models/weddingRsvp.model");

router.route("/").get((req, res) => {
  WeddingRSVP.find()
    .then((rsvp) => res.json(rsvp))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const response = req.body.response;
  const starter = req.body.starter;
  const main = req.body.main;
  const dessert = req.body.dessert;
  const comments = req.body.comments;

  const newRSVP = new WeddingRSVP({
    name,
    response,
    starter,
    main,
    dessert,
    comments,
  });

  newRSVP
    .save()
    .then(() => res.json("RSVP Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  WeddingRSVP.findById(req.params.id)
    .then((rsvp) => res.json(rsvp))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
