const mongoose = require('mongoose');

const Rating = mongoose.model('Rating', {
	suggestions:String,
	UserRating:Number
});

module.exports = Rating;



