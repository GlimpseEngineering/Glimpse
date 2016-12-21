module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING
      },
      profPic: {
        type: DataTypes.TEXT
      },
      authId: {
        type: DataTypes.TEXT
      },
      email: {
        type: DataTypes.TEXT
      },
      bio: {
        type: DataTypes.TEXT
      },
      dob: {
        type: DataTypes.DATE
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Post, {
          foreignKey: {
            allowNull: false
          }
        });
        User.belongsToMany(models.Tag, {
          through: 'UserTags'
        });
        User.belongsToMany(models.User, {
          as: 'Friend',
          through: 'UserFriend',
          constraints: false
        });
      }
    } 
  });
  return User;
};