module.exports = app => {
    const story = require("../controllers/story.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", story.createStory);
  
    router.get("/", story.findAllStories);

    router.get("/:id", story.findOneStory);

    router.put("/:id", story.updateStory);

    router.delete("/:id", story.deleteOneStory);

    router.delete("/", story.deleteAllStories);

    app.use('/api/stories', router);
  };