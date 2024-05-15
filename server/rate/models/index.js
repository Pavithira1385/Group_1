const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

 const db = {};
db.mongoose = mongoose;
db.url      = dbConfig.url;
db.registration=require("./RegistrationModel.js")(mongoose);
db.login=require("./loginModel.js")(mongoose);
db.rating = require("./ratingModel.js")(mongoose);
db.traveller= require("./Traveller.js")(mongoose);
db.vehicle= require("./Vehicle.js")(mongoose);
db.hotel = require("./bookingModel.js")(mongoose);

module.exports = db;
    