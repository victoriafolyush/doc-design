module.exports = app => {
    const text = require("../controllers/textControler.js");

    var router = require("express").Router();
  
    router.post("/", text.createText);
  
    router.get("/", text.findAllTexts);

    router.get("/:id", text.findOneText);

    router.put("/:id", text.updateText);

    router.delete("/:id", text.deleteOneText);

    router.delete("/", text.deleteAllTexts);

    app.use('/api/texts', router);
  };