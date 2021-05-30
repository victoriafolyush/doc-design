const db = require("../models");
const Text = db.texts;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
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

exports.findOne = (req, res) => {
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


  exports.create = (req, res) => {
    if (!req.body.value) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const text = {
      value: req.body.value,
      font: req.body.font,
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