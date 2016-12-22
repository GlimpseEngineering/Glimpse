module.exports = (sequelize, DataTypes) => {
  
  const User_Emoji_Post = sequelize.define('User_Emoji_Post', {}, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        User_Emoji_Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        });
      }
    } 
  });
  return User_Emoji_Post;
};