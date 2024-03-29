module.exports = mongoose => {
	
	var schema = mongoose.Schema(
	{ 
		Name:String,
		Suggestions:String,
		UserRating:Number
	},
   
   { timestamps: true }
    );


   schema.method("toJSON", function() {
       const {__v,_id,...object} = this.toObject();
	   object.id=_id;
	   return object;
	});	   
	
	const Rating = mongoose.model("rating",schema);
	 return Rating;
	 
}; 