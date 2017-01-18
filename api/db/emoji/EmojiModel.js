module.exports = (sequelize, DataTypes) => {
  
  const Emoji = sequelize.define('Emoji', {
      name : {
        type: DataTypes.STRING
      },
      json : {
        type: DataTypes.TEXT
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
  return Emoji;
};