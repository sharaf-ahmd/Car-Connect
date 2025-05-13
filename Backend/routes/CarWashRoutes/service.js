const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../../middlewares/ProfileMiddlewares/authenticate.js');
const { getServices, getSingleService, updateService, deleteService, newService } = require('../../controllers/CarWashController/serviceController.js');

router.route('/api/services').get( getServices);
//router.route('/booking/new').post(isAuthenticatedUser, authorizeRoles('admin','customer'), newBooking);
router.route('/api/service/:id')
                            .get(getSingleService)
                            .put(updateService)
                            .delete(deleteService)

                        
//Admin routes
router.route('/api/admin/service/new').post(isAuthenticatedUser, authorizeRoles('carwash'), newService);

module.exports = router;