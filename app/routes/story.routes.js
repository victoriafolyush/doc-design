module.exports = app => {
    const story = require("../controllers/story.controller.js");
  
    var router = require("express").Router();
  
    router.post("/add", story.createStory);
  
    router.get("/", story.findAllStories);

    router.get("/:id", story.findOneStory);

    router.put("/update/:id", story.updateStory);

    router.delete("delete/:id", story.deleteOneStory);

    router.delete("/delete", story.deleteAllStories);

    app.use('/api/stories', router);
  };