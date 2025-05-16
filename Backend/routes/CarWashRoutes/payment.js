const express = require('express');
const { processPayment, sendStripeApi } = require('../../controllers/CarWashController/paymentController');
const { isAuthenticatedUser } = require('../../middlewares/ProfileMiddlewares/authenticate');
const router = express.Router();

router.route('/api/payment/process/ahamed').post( isAuthenticatedUser, processPayment);
router.route('/api/stripeapi/ahamed').get( isAuthenticatedUser, sendStripeApi);


module.exports = router;