const express = require('express');
const Hotel = require('../models/bookingModel.js');
const router = express.Router();

// Create a new hotel booking
router.post('/', async (req, res) => {
    const {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zipCode,
        phone,
        email,
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime,
        roomPreference,
        numberOfAdults,
        numberOfChildren,
        payment
    } = req.body;

    try {
        const newHotelBooking = new Hotel({
            firstName,
            lastName,
            address1,
            address2,
            city,
            state,
            zipCode,
            phone,
            email,
            checkInDate,
            checkInTime,
            checkOutDate,
            checkOutTime,
            roomPreference,
            numberOfAdults,
            numberOfChildren,
            payment
        });

        const savedHotelBooking = await newHotelBooking.save();
        res.status(201).json(savedHotelBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all hotel bookings
router.get('/', async (req, res) => {
    try {
        const hotelBookings = await Hotel.find();
        res.json(hotelBookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single hotel booking by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const hotelBooking = await Hotel.findById(id);
        if (!hotelBooking) {
            return res.status(404).json({ message: 'Hotel booking not found' });
        }
        res.json(hotelBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a hotel booking by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    try {
        const updatedHotelBooking = await Hotel.findByIdAndUpdate(id, update, { new: true });
        if (!updatedHotelBooking) {
            return res.status(404).json({ message: 'Hotel booking not found' });
        }
        res.json(updatedHotelBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a hotel booking by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedHotelBooking = await Hotel.findByIdAndDelete(id);
        if (!deletedHotelBooking) {
            return res.status(404).json({ message: 'Hotel booking not found' });
        }
        res.json({ message: 'Hotel booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;



/*const express = require('express');
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
*/
