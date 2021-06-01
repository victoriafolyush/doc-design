const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  // console.log("Drop and re-sync db.");
});

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to lab3 application." });
});

require("./app/routes/text.routes")(app);
require("./app/routes/story.routes")(app);
// set port, listen for requests\
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});