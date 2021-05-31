const db = require("../models");
const Story = db.stories;

exports.createStory = (req, res) => {  
const story = {
  isSponsored: req.body.isSponsored,
  isCloseFriends: req.body.isCloseFriends,
};

Story.create(story)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Story."
    });
  });
};

exports.findAllStories = (req, res) => {
const isSponsored = req.query.isSponsored;
var condition = isSponsored ? { isSponsored: { [Op.like]: `%${isSponsored}%` } } : null;

Story.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving story."
    });
  });
};