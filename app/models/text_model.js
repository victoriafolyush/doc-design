// import TextInterface from '../interfaces/Itext.js';

// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory');

// class Text extends Model {
//   constructor(){
//   }
// }

// Text.init({
//   // id: { type: DataTypes.STRING, allowNull: false, primaryKey: true, autoIncrement: true },
//   value: {type: DataTypes.STRING, allowNull: false},
//   font: {type: DataTypes.STRING, allowNull: true}
// }, {
//   sequelize,
//   modelName: 'texts'
// });

// console.log(Text === sequelize.models.Text); // true
// export default new Text(); 


module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define("texts", {
    value: {type: DataTypes.STRING, allowNull: false},
    font: {type: DataTypes.STRING, allowNull: true}
  },
  {
    timestamps: false
  });

  return Text;
};