const Sequelize = require('sequelize');
const config = require('../config/config')
const user = require('./user')

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]
const db = {}

db.User = user;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize)
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;