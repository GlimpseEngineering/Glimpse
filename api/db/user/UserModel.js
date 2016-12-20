module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true
    // classMethods: {
    //   associate: (models) => {
    //     User.hasMany(models.____);
    //   }
    // } 
  })
  
  return User;
}