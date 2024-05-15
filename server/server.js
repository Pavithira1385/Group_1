const express=require('express');
const cors=require("cors");
const mongoose = require('mongoose');
const regRoutes=require('./rate/route/registerRoute');
const loginRoutes=require('./rate/route/loginRoute');
const vehicleRoutes = require('./rate/route/VehicleRoutes');
const travellerRoutes = require('./rate/route/travellerRoutes');
const ratingRoutes=require('./rate/route/ratingRoute');
const hotelRoutes=require('./rate/route/hotelRoute');
const adminRoutes=require('./rate/route/adminRoute');
const placeRoutes=require('./rate/route/placeRoute');
const app=express();


var corsOpt={
	origin:"http://localhost:3000"
};

app.use(cors(corsOpt));

//parse request of content type
app.use(express.json());

//parse request of content type-application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

const db=require("./rate/models");
db.mongoose
 .connect(db.url,{
	 useNewUrlParser:true,
	 useUnifiedTopology:true
 })
 mongoose.connect('mongodb://127.0.0.1:27017/travel_db')
 .then(() => {
	 console.log("successfully connected to MongoDB!");	 
 })
 .catch(err => {
	console.log("cannot connect to MongoDB!",err);
process.exit();	
 });
 
 //simple route
 app.get("/",(req,res)=>{
	 res.json({message:"welcome to our sample restful application"});
 });
 app.use('/registrations',regRoutes);
 app.use('/logins',loginRoutes);
 app.use('/ratings',ratingRoutes );
 app.use('/vehicles', vehicleRoutes);
app.use('/travellers', travellerRoutes);
app.use('/hotels',hotelRoutes);
app.use('/places',placeRoutes);
app.use('/admin',adminRoutes);
 //set port,listen for requests
 const PORT=5000;
 app.listen(PORT,() => {
	console.log(`server is running on port ${PORT}`);

 });
 