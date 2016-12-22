module.exports = (sequelize, DataTypes) => {
  
  const Follow = sequelize.define('Follow', {
      status : {
        type: DataTypes.ENUM('pending', 'accepted')
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
      }
    } 
  });
  return Follow;
};