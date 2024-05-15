const express = require('express');
const router = express.Router();
const Rating = require('../models/ratingModel');
const Hotel = require('../models/bookingModel');
const Vehicle = require('../models/Vehicle');
const Place=require('../models/placeModel');

// Ratings
router.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Hotels
router.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Vehicles
router.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/places', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*
router.delete('/ratings/:id', async (req, res) => {
    try {
      await Rating.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Rating deleted' });
    } catch (err) {
      console.error('Error deleting rating:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  // Delete hotel by ID
router.delete('/hotels/:id', async (req, res) => {
    try {
      await Hotel.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Hotel deleted' });
    } catch (err) {
      console.error('Error deleting hotel:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete vehicle by ID
  router.delete('/vehicles/:id', async (req, res) => {
    try {
      await Vehicle.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Vehicle deleted' });
    } catch (err) {
      console.error('Error deleting vehicle:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete traveler by ID
  router.delete('/travellers/:id', async (req, res) => {
    try {
      await Traveler.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Traveler deleted' });
    } catch (err) {
      console.error('Error deleting traveler:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete registration by ID
  router.delete('/registrations/:id', async (req, res) => {
    try {
      await Registration.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'Registration deleted' });
    } catch (err) {
      console.error('Error deleting registration:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  */
module.exports = router;
