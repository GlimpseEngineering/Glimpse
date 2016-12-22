module.exports = (sequelize, DataTypes) => {

  const Tag = sequelize.define('Tag', {
      name: {
        type: DataTypes.STRING
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        Tag.belongsToMany(models.Post, {
          through: "Post_Tags",
          constraints: false
        })
        Tag.belongsToMany(models.User, {
          through: "User_Tags",
          constraints: false
        })
      }
    }
  });
  return Tag;
};
