const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/bookings - Create a new booking
router.post('/', bookingController.createBooking);

// GET /api/bookings - Get all bookings
router.get('/', bookingController.getAllBookings);

// GET /api/bookings/:id - Get a single booking by ID
router.get('/:id', bookingController.getBookingById);

// PUT /api/bookings/:id - Update a booking by ID
router.put('/:id', bookingController.updateBookingById);

// DELETE /api/bookings/:id - Delete a booking by ID
router.delete('/:id', bookingController.deleteBookingById);

// GET /api/bookings/search?query=example - Search bookings by name or location
router.get('/search', bookingController.searchBookings);

// GET /api/bookings/:id/price - Get the total price of a booking by ID
router.get('/:id/price', bookingController.getBookingPrice);

module.exports = router;
