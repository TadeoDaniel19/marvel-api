const express = require('express');
const router = express.Router();
const controller = require("../controllers/movies.js");

// get all movies
router.get("/movies", controller.findAll);

// get one movie
router.get("/movie/:id", controller.findOne);

// Create a new movie
router.post("/movie", controller.create);

// delete a new movie
router.delete("/movie/:id", controller.delete);

module.exports = router;
