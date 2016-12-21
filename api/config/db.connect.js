const Sequelize = require('sequelize');

const modelPaths = [
  __dirname + '/../db/user/UserModel.js',
  __dirname + '/../db/post/PostModel.js',
  __dirname + '/../db/tag/TagModel.js'
];

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then((message) => {
    console.log('Connection has been established to:', process.env.DB_HOST + ':' + process.env.DB_PORT);
  })
  .catch((err) => {
    throw err;
  });

const db = {};

modelPaths.forEach((path) => {
  let model = sequelize.import(path)
  db[model.name] = model
});

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db)
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;