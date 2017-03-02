module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    slack_id: {type: DataTypes.STRING, allowNull: false },
    //user_name: {type: DataTypes.INTEGER, allowNull: false },
  });
  return User;
};