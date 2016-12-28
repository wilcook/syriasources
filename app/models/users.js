//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB.  
var sequelize = require("../config/connection.js");

var users = sequelize.define("users", {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    user_name: Sequelize.STRING
}, {
    timestamps: false
});

// Sync with DB
Sources.sync();

module.exports = Sources;
