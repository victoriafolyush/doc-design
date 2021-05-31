module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define("texts", {
    value: {type: DataTypes.STRING, allowNull: true},
    font: {type: DataTypes.STRING, allowNull: true},
    storyId: {type: DataTypes.INTEGER, allowNull: true}
  },
  {
    timestamps: false
  });

  return Text;
};