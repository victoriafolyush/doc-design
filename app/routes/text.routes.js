module.exports = app => {
    const text = require("../controllers/textControler.js");

    var router = require("express").Router();
  
    router.post("/", text.createText);
  
    router.get("/", text.findAllTexts);

    app.use('/api/texts', router);
  };