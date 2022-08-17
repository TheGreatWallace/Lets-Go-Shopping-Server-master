
    const Items = require("../controllers/item.controller");
    const express = require('express');
    const router = express.Router()

    // Create a new Item
    router.post("/", Items.create);
  
    // Retrieve all Items
    router.get("/", Items.findAllItems);
  
    // Retrieve all Bought Items
    router.get("/bought", Items.findAllBought);
  
    // Retrieve a single Item with id
    router.get("/:id", Items.findItem);
  
    // Update an Item with id
    router.put("/:id", Items.updateItem);
  
    // Delete an Item with id
    router.delete("/:id", Items.deleteItem);
  
    // Delte all Items
    router.delete("/", Items.deleteAllItems);
  
   
module.exports = router;