const db = require("../models");
const Rating = db.rating;

//create and store a new Journal
exports.create = (req,res) => {
	//valid request
    if(!req.body.Name){
		res.status(400).send({message:"Content can not be empty"});
		return;
	}


	//create a journals
	const rating = new Rating({
		Name:req.body.Name,
		Suggestions:req.body.Suggestions,
		UserRating:req.body.UserRating
	});	
	
	//store a journal in the database
	
	rating
	   .save(rating)
	   .then(data=> {
		   res.send(data);
	   })
	   .catch(err => {
		   res.status(500).send({
			   message:
			      err.message || "some error occurred while creating the rating"
		   });	 
	   });
};	   

// Retrieve all journals from the database
exports.findAll=(req,res)=>{
	const Name=req.query.Name;
	var condition = Name ? { Name:{$regex: new RegExp(Name),$options:"i"}}:{};
	
	Rating.find(condition)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "some error occured while retrieving ratings"
		});
	});
};








/*
http://localhost:8080/api/journals/published
*/ 