module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define("stories", {
        isSponsored: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
        isCloseFriends: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
    },
    {
      timestamps: false
    });
  
    return Story;
  };

  
