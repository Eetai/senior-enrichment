const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgURL: {
        type: Sequelize.STRING,
        defaultValue: "PUTLINKHERE"
    },
    description: {
        type: Sequelize.TEXT
    }
});