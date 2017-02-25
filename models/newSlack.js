module.exports = function(sequelize, DataTypes) {
  var newSlack = sequelize.define("mySlacks", {
    slack_id: DataTypes.INTEGER,
    slack: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  });
  return newSlack;
};