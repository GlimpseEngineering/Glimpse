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
       User.belongsToMany(models.Emoji, { 
         through: 'User_Emoji_Post',
         constraints: false
        });
        User.hasOne(models.User_Emoji_Post, {
          foreignKey: {
            allowNull: false
          }
        });
       User.belongsToMany(models.User, {
         through: 'Friend',
         as: 'Friend'
       });
       User.belongsToMany(models.Tag, {
         through: "User_Tags",
         constraints: false
       });
       User.hasMany(models.Post, {
         foreignKey: {
           allowNull: false
         }
       });
      }
    }
  });
  return User;
};
