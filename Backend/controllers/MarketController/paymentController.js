
const stripe = require('stripe')("sk_test_51QhOpc4bJzIHZ9lA1o8RnD08eJmV4c2IrpAgX9tHpwRxBsjMchk6waacsPXXnYQle6cGBzPV8E7uIfIWdtqJVKoh00f4Zo9bnN")
exports.processPayment  = async(req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "lkr",
        description: "PAYMENT",
        metadata: { integration_check: "accept_payment"},
        shipping: req.body.shipping
    })

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })
}

exports.sendStripeApi  = async(req, res, next) => {
    res.status(200).json({
        stripeApiKey: "pk_test_51QhOpc4bJzIHZ9lAgAQvliN5T4FpxnvWYSD1NNPU27OnbQjA4GxyFMkBU4EnU8BxOPiullLrWuavDOpowsGXkPqc00W8NDESt7"
    })
}