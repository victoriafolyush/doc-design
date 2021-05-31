module.exports = app => {
    const story = require("../controllers/story.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", story.createStory);
  
    router.get("/", story.findAllStories);
  
    app.use('/api/stories', router);
  };