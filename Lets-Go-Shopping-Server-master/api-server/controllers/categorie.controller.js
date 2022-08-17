const db = require("../models");
const Categorie = db.Categories;


// Create and Save a new Categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Categorie
  const categorie = new Categorie({
    name: req.body.name,
    description: req.body.description
  });

  // Save a Categorie in the database
  categorie
    .save().then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some errors occurred while creating this categorie"
      });
    });
};

// Retrieve all Categories from the database.
exports.findAllCategories = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Categorie.find(condition)
    .then( (data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some errors occurred while retrieving the categories."
      });
    });
};

// Find a single Categorie with an id
exports.findCategory = (req, res) => {
  const id = req.params.id;

  Categorie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Categorie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Categorie with id=" + id });
    });
};

// Update a Categorie by the id in the request
exports.updateCategory = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  Categorie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Categorie with id=${id}. Maybe Categorie was not found!`
        });
      } else res.send({ message: "Categorie was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Categorie with id=" + id
      });
    });
};

// Delete a Categorie with the specified id in the request
exports.deleteCategory = (req, res) => {
  const id = req.params.id;

  Categorie.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
        });
      } else {
        res.send({
          message: "Categorie was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Categorie with id=" + id
      });
    });
};

// Delete all Categories from the database.
exports.deleteAllCategories = (req, res) => {
  Categorie.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} All Categories were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some errors occurred while removing all categories."
      });
    });
};

