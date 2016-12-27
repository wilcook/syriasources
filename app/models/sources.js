//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB.  
var sequelize = require("../config/connection.js");

var Sources = sequelize.define("Sources", {
    source_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    admin_id: Sequelize.STRING,
    source_name: Sequelize.STRING,
    source_description: Sequelize.TEXT,
    source_url: Sequelize.STRING,
    source_img: Sequelize.STRING,
    source_video: Sequelize.STRING,
    aid_projects: Sequelize.BOOLEAN,
    articles: Sequelize.BOOLEAN,
    authors_grouos: Sequelize.BOOLEAN,
    books: Sequelize.BOOLEAN,
    casualty_count: Sequelize.BOOLEAN,
    films: Sequelize.BOOLEAN,
    news_analysis: Sequelize.BOOLEAN,
    not_trusted: Sequelize.BOOLEAN,
    reports: Sequelize.BOOLEAN,
    solidarity: Sequelize.BOOLEAN,
    video_clips: Sequelize.BOOLEAN
}, {
    timestamps: true
});

// Sync with DB
Sources.sync();

module.exports = Sources;
