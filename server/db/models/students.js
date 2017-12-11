const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
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
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 4.0
        }
    }

}, {
        getterMethods: {
            fullName: function () {
                return this.firstName + ' ' + this.lastName;
            }
        }
    });