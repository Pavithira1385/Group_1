const express = require('express');
const Rating = require('../models/ratingModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const rating = new Rating({
    //name: req.body.name,
    suggestions: req.body.suggestions,
    UserRating: req.body.UserRating
  });

  try {
    const newRating = await rating.save();
    res.status(201).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/*
router.delete('/:id', async (req, res) => {
  try {
    await Rating.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Rating deleted' });
  } catch (err) {
    res.status(404).json({ message: 'Rating not found' });
  }
});
*/
module.exports = router;
