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
       // add relationship with tags here

       // add relationship with posts here

       // add relationship with emojis here
       User.belongsToMany(models.Emoji, { 
         through: 'User_Emoji_Post',
         constraints: false
        });
       User.belongsToMany(models.Post, { 
         through: 'User_Emoji_Post',
         constraints: false
        });
      }
    } 
  });
  return User;
};