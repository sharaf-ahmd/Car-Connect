const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../../middlewares/ProfileMiddlewares/authenticate.js');
const { getServices, getSingleService, updateService, deleteService, newService, getAdminServices } = require('../../controllers/CarWashController/serviceController.js');
const multer = require('multer');


const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '..', 'uploads/service'))
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})})
router.route('/api/services').get( getServices);
//router.route('/booking/new').post(isAuthenticatedUser, authorizeRoles('admin','customer'), newBooking);
router.route('/api/service/:id')
                            .get(getSingleService)
                            .put(updateService)
                            .delete(deleteService)

                        
//Admin routes
router.route('/api/admin/service/new').post(isAuthenticatedUser, authorizeRoles('carwash'), newService);
router.route('/api/admin/service/new').post(isAuthenticatedUser, authorizeRoles('carwash'), upload.single("image"), newService);
router.route('/api/admin/services').get(isAuthenticatedUser, authorizeRoles('carwash'), getAdminServices);
module.exports = router;