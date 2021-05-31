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

//   exports.findStoryById = (storyId) => {
//     return Story.findByPk(storyId, { include: ["texts"] })
//       .then((story) => {
//         return story;
//       })
//       .catch((err) => {
//         console.log(">> Error while finding story: ", err);
//       });
//   };

//   exports.findAllStories = () => {
//     return Story.findAll({
//       include: ["texts"],
//     }).then((stories) => {
//       return stories;
//     });
//   };

    exports.findAllStories = (req, res) => {
  
    Story.findAll()
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