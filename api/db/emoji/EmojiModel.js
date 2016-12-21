module.exports = (sequelize, DataTypes) => {
  
  const Emoji = sequelize.define('Emoji', {

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
  return User;
};