const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url      = dbConfig.url;
db.rating = require("./bookingModel.js")(mongoose);

module.exports = db;
    