const express = require('express');
const {processPayment,sendStripeApi}=require('../../controllers/MarketController/paymentController.js')
const {isAuthenticatedUser}=require('../../middlewares/ProfileMiddlewares/authenticate.js')
const router = express.Router();

router.route('/api/payment/process').post(isAuthenticatedUser,processPayment);
router.route('/api/stripeapi').get(isAuthenticatedUser,sendStripeApi);


module.exports = router;