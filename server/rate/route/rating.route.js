module.exports = app => {
	
	const rating = require("../controller/rating.controller.js");
	
	 var router = require("express").Router();
	 
	 // Create a new journal 
	 router.post("/",rating.create);
	 
	// retrieve a new journal 
	router.get("/",rating.findAll);

// Inside your '/api/rating' route
router.post("/", async (req, res) => {
    try {
      const { name, suggestions, rating } = req.body;
      console.log('Received data:', { name, suggestions, UserRating });
  
      // Your existing code for processing the rating
  
      res.status(200).json({ message: 'Rating submitted successfully' });
    } catch (error) {
      console.error('Error processing rating:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.use("/api/rating",router);
};	