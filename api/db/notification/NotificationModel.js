module.exports = (sequelize, DataTypes) => {

  const Notification = sequelize.define('Notification', {
      notificationType: {
        type: DataTypes.ENUM('user', 'post')
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        Notification.belongsTo(models.User, {
          as: 'Sender',
          foreignKey: {
            allowNull: false
          }
        });
        Notification.belongsTo(models.User, {
          as: 'Recipient',
          foreignKey: {
            allowNull: false
          }
        });
        Notification.belongsTo(models.Post, {
          foreignKey: {
            allowNull: true
          }
        }); 
      }
    }
  });
  return Notification;
};
