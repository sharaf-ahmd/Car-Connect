const express=require('express');
const router=express.Router();
const {newOrder}=require("../../controllers/MarketController/orderController.js")
const {isAuthenticatedUser,authorizeRoles}=require('../../middlewares/ProfileMiddlewares/authenticate.js')

router.route('/api/order/new').post(isAuthenticatedUser,newOrder);

module.exports=router