const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    GPA: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            min: 0,
            max: 4.0
        }
    }
});