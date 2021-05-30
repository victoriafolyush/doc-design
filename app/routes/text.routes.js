module.exports = app => {
    const text = require("../controllers/textControler.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", text.create);
  
    // Retrieve all Tutorials
    router.get("/", text.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", text.findOne);
  
    app.use('/api/texts', router);
  };