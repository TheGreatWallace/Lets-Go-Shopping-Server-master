
    const Categories = require("../controllers/categorie.controller");
    const express = require('express');
    const router = express.Router()

    // Create a new Categorie
    router.post("/", Categories.create);
  
    // Retrieve all Categories
    router.get("/", Categories.findAllCategories);
  
    // Retrieve a single Categorie with id
    router.get("/:id", Categories.findCategory);
  
    // Update a Categorie with id
    router.put("/:id", Categories.updateCategory);
  
    // Delete a Categorie with id
    router.delete("/:id", Categories.deleteCategory);
  
    // Delte all Categories
    router.delete("/", Categories.deleteAllCategories);
  
   
module.exports = router;