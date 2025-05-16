const catchAsyncError = require('../../middlewares/CarWashMiddlewares/catchAsyncError');
const stripe = require('stripe')('sk_test_51QhOpc4bJzIHZ9lA1o8RnD08eJmV4c2IrpAgX9tHpwRxBsjMchk6waacsPXXnYQle6cGBzPV8E7uIfIWdtqJVKoh00f4Zo9bnN');

exports.processPayment = catchAsyncError(async (req, res, next) => {
    const { amount, booking } = req.body;
console.log(amount)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Stripe expects the amount in cents
        currency: 'lkr',
        description: 'Car Wash Payment',
        metadata: {
            integration_check: 'accept_payment',
            bookingInfo: JSON.stringify(booking) // You can stringify to store structured data
        }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    });
});

exports.sendStripeApi = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        stripeApiKey: "pk_test_51QhOpc4bJzIHZ9lAgAQvliN5T4FpxnvWYSD1NNPU27OnbQjA4GxyFMkBU4EnU8BxOPiullLrWuavDOpowsGXkPqc00W8NDESt7"
    });
});