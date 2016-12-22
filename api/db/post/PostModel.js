module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
      content: {
        type: DataTypes.TEXT
      },
      description: {
        type: DataTypes.TEXT
      },
      format: {
        type: DataTypes.STRING
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
       // add relationship with tags here
       Post.belongsTo(models.User, {
         foreignKey: {
           allowNull: false
         },
         onDelete: "cascade"
       })
       // add relationship with posts here
       Post.belongsToMany(models.Tag, {
         through: "User_Tags",
         constraints: false
       })
       // add relationship with emojis here
       Post.belongsToMany(models.Emoji, {
         through: "User_Emoji_Post",
         constraints: false
       })
       Post.belongsToMany(models.User, {
         through: 'User_Emoji_Post',
         constraints: false
        })
      }
    }
  });
  return Post;
};
