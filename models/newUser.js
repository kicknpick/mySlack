module.exports = function(sequelize, DataTypes) {
  var newUser = sequelize.define("Users", {
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
  });
  return newUser;
};