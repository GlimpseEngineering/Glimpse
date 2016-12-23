module.exports = (sequelize, DataTypes) => {
  
  const Post_Tags = sequelize.define('Post_Tags', {}, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true,
  });
  return Post_Tags;
};