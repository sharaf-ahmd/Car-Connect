const express = require('express');
const { newBooking, getSingleBooking, updateBooking, deleteBooking, myBookings, bookings } = require('../../controllers/CarWashController/bookingController.js');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../../middlewares/ProfileMiddlewares/authenticate.js');

// Customer routes
router.route('/api/booking/new').post(isAuthenticatedUser, newBooking); // Create a new booking
router.route('/api/booking/:id')
    .get(getSingleBooking) // Get a specific booking by ID
    .put(isAuthenticatedUser, updateBooking); // Update booking by ID (customer can update)
    
router.route('/api/mybookings').get(isAuthenticatedUser, myBookings); // Get all bookings for the authenticated user

// Admin routes
router.route('/api/bookings').get(isAuthenticatedUser, authorizeRoles('carwash'), bookings); // Get all bookings for admins
router.route('/api/booking/:id')
    .put(isAuthenticatedUser, authorizeRoles('carwash'), updateBooking) // Admins can update bookings
    .delete(isAuthenticatedUser, authorizeRoles('carwash'), deleteBooking); // Admins can delete bookings

module.exports = router;