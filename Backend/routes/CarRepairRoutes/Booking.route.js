const express =require('express');
const { createbooking,deleteBooking, getBooking,getBookings, updateBooking } = require('../../controllers/CarRepairController/bookingController.js');


const router = express.Router();


router.route('/api/booking').get(getBooking);  
router.route('/api/bookings').get(getBookings);  
router.route('/api/create/booking').post(createbooking);
router.route('/api/delete/booking/:id').delete(deleteBooking); 
router.route('/api/update/booking/:id').put(updateBooking);


module.exports=router