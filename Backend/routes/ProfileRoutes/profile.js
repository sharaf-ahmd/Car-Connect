const express=require('express');
const {registerUser,
    loginUser,
    logoutUser,
    registerSupplier,
    getUserProfile
}=require('../../controllers/ProfileController/profileController.js')
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../../middlewares/ProfileMiddlewares/authenticate.js')

router.route('/api/register').post(registerUser);
router.route('/api/register/supplier').post(registerSupplier);
router.route('/api/login').post(loginUser);
router.route('/api/logout').get(logoutUser);
router.route('/api/myprofile').get(isAuthenticatedUser,getUserProfile);

module.exports=router;