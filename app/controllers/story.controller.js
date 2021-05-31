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
        err.message || "Some error occurred while retrieving Story."
    });
  });
};

exports.findOneStory = (req, res) => {
  const id = req.params.id;

  Story.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving story with id=" + id
      });
    });
};

exports.updateStory = (req, res) => {
  const id = req.params.id;

  Story.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Story was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Story with id=${id}. Maybe Story was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Story with id=" + id
      });
    });
};

exports.deleteOneStory = (req, res) => {
  const id = req.params.id;

  Story.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Story was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Story with id=${id}. Maybe Story was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Story with id=" + id
      });
    });
};
exports.deleteAllStories = (req, res) => {
  Story.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Stories."
      });
    });
};