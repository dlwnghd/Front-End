const Sequelize = require('sequelize');
const config = require('../config/config')

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]
const db = {}

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;