const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const controllertext = require("./app/controllers/textControler");
const controllerstory = require("./app/controllers/story.controller");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const run = async () => {
  const story1 = await controllerstory.createStory({
    isSponsored: true,
    isCloseFriends: false,
  });

  const text1 = await controllertext.createText(story1.id, {
    value: "bezkoder",
    font: "Good job!",
  });
};

db.sequelize.sync({ force: false }).then(() => {
  // console.log("Drop and re-sync db.");
  // run();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require("./app/routes/turorial.routes")(app);
require("./app/routes/text.routes.js")(app);
require("./app/routes/story.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});