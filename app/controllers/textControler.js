const db = require("../models");
const Text = db.texts;
const Op = db.Sequelize.Op;

exports.createText = (req, res) => {
  const text = {
    value: req.body.value,
    font: req.body.font,
    storyId: req.body.storyId,
  };

  Text.create(text)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Text."
    });
  });
};

exports.findAllTexts = (req, res) => {
  const value = req.query.value;
  var condition = value ? { value: { [Op.like]: `%${value}%` } } : null;

  Text.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving texts."
      });
    });
};

exports.findOneText = (req, res) => {
  const id = req.params.id;

  Text.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Text with id=" + id
      });
    });
};

exports.updateText = (req, res) => {
  const id = req.params.id;

  Text.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Text was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Text with id=${id}. Maybe Text was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Text with id=" + id
      });
    });
};

exports.deleteOneText = (req, res) => {
  const id = req.params.id;

  Text.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Text was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Text with id=${id}. Maybe Text was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Text with id=" + id
      });
    });
};
exports.deleteAllTexts = (req, res) => {
  Text.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Texts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Texts."
      });
    });
};