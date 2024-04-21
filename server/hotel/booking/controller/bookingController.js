const Booking = require('../models/bookingModel.js');

// Create a new booking
const createBooking = async (req, res) => {
    const { name, checkInDate, checkOutDate, guests, roomOption, price, currency } = req.body;

    try {
        const newBooking = new Booking({
            name,
            checkInDate,
            checkOutDate,
            guests,
            roomOption,
            price,
            currency
        });

        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a booking by ID
const updateBookingById = async (req, res) => {
    const { id } = req.params;
    const { name, checkInDate, checkOutDate, guests, roomOption, price, currency } = req.body;

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { name, checkInDate, checkOutDate, guests, roomOption, price, currency },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a booking by ID
const deleteBookingById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search bookings by name or location
const searchBookings = async (req, res) => {
    const { query } = req.query;

    try {
        const bookings = await Booking.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } }
            ]
        });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the total price of a booking by ID
const getBookingPrice = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const totalPrice = calculateTotalPrice(booking);
        res.json({ totalPrice });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Helper function to calculate total price based on room type and duration
const calculateTotalPrice = (booking) => {
    const { roomOption, checkInDate, checkOutDate } = booking;
    const basePricePerNight = getBasePricePerNight(roomOption);
    const numberOfNights = calculateNumberOfNights(checkInDate, checkOutDate);
    return basePricePerNight * numberOfNights;
};

// Helper function to get base price per night based on room option
const getBasePricePerNight = (roomOption) => {
    switch (roomOption) {
        case 'single':
            return 100;
        case 'double':
            return 150;
        case 'suite':
            return 200;
        default:
            return 0;
    }
};

// Helper function to calculate number of nights
const calculateNumberOfNights = (checkInDate, checkOutDate) => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return numberOfDays;
};

module.exports = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBookingById,
    deleteBookingById,
    searchBookings,
    getBookingPrice
};
