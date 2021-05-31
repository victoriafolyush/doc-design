module.exports = app => {
    const story = require("../controllers/story.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", story.createStory);
  
    // Retrieve all Tutorials
    router.get("/", story.findAllStories);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", story.findStoryById);
  
    app.use('/api/stories', router);
  };