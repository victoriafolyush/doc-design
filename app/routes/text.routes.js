module.exports = app => {
    const text = require("../controllers/textControler.js");

    var router = require("express").Router();
  
    router.post("/add", text.createText);
  
    router.get("/", text.findAllTexts);

    router.get("/:id", text.findOneText);

    router.put("/update/:id", text.updateText);

    router.delete("/delete/:id", text.deleteOneText);

    router.delete("/delete", text.deleteAllTexts);

    app.use('/api/texts', router);
  };