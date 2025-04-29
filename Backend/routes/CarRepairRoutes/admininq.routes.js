const express =require('express');
const { getAdminInquiries, deleteAdminInquiry,updateAdminInquiry } =require('../../controllers/CarRepairController/adminInq.controller');
const router = express.Router();

router.route('/api/get/admin/inquiries').get(getAdminInquiries);           
router.route('/api/update/admin/inquiry/:id').put(updateAdminInquiry);      
router.route('/api/delete/admin/inqury/:id').delete(deleteAdminInquiry); 

module.exports=router