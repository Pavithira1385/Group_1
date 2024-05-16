const express = require('express');
const Vehicle = require('../models/Vehicle');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const vehicle = new Vehicle({
    name: req.body.name,
    type: req.body.type,
    capacity: req.body.capacity
  });

  try {
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Vehicle.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Vehicle deleted' });
  } catch (err) {
    res.status(404).json({ message: 'Vehicle not found' });
  }
});

module.exports = router;
