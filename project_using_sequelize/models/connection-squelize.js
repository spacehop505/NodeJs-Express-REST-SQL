const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-fruit', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;