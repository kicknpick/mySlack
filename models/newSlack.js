module.exports = function(sequelize, DataTypes) {
    var Slack = sequelize.define("Slack", {
        //slack_id: { type: DataTypes.INTEGER, allowNull: false },
        slack: DataTypes.TEXT,
        file: DataTypes.STRING,
        category: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Slack.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }

    });
    return Slack;
};
