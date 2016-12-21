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
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE' 
        });
      }
    } 
  });
  return Post;
};