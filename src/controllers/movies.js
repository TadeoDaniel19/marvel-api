const MovieModel = require('../models/movie');

// Create a movie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      status: "Bad request",
      message: "The movie is required.",
    });
    return;
  }

  // Create a Movie Detail
  const movie = new MovieModel({
    title: req.body.title,
    release_date: req.body.release_date,
    duration: req.body.duration,
    overview: req.body.overview,
    cover_url: req.body.cover_url,
    trailer_url: req.body.trailer_url,
    directed_by: req.body.directed_by,
    phase: req.body.phase,
    saga: req.body.saga,
    chronology: req.body.chronology,
    post_credit_scenes: req.body.post_credit_scenes,
  });

  // Save movie in the database
  movie
    .save(movie)
    .then(data => {
      res.status(201).send({
        status: "Created",
        message: "The movies resource has been created successfully.",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Internal Server Error",
        message: err.message || "Some error occurred while creating a movie."
      });
    });
};

// find all movies.
exports.findAll = (req, res) => {
  const filter = req.query.order_by_chronology ? { chronology: req.query.order_by_chronology } : {};

  MovieModel.find().sort(filter).exec()
    .then(data => {
      res.status(200).send({
        status: "Ok",
        message: "The movies resource has been obtained successfully.",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Internal Server Error",
        message: err.message || "Some error occurred while creating a movie."
      });
    });
};

// Find a movie by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  MovieModel.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          status: "Not found",
          param: id,
          message: "The movie hasnt been obtained.",
        });
      } else {
        res.status(200).send({
          status: "Ok",
          message: "The movie resource has been obtained successfully.",
          data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: "Internal Server Error",
        message: err.message || "Some error occurred while creating a movie."
      });
    });
};

// Delete a movie by id
exports.delete = (req, res) => {
  const id = req.params.id;

  MovieModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          status: "Not found",
          param: id,
          message: "The movie hasnt been deleted.",
        });
      } else {
        res.status(200).send({
          status: "Ok",
          message: "The movie resource has been deleted successfully.",
          data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: "Internal Server Error",
        message: err.message || "Some error occurred while creating a movie."
      });
    });
};