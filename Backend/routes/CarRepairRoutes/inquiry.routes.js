const express =require('express');
const { createInquiry,  deleteInquiry,  getInquiry,} =require('../../controllers/CarRepairController/inquiry.controller');
const router = express.Router();

router.route('/api/get/inquiry').get(getInquiry);           
router.route('/api/create/inquiry').post(createInquiry);      
router.route('/api/delete/inquiry/:id').delete(deleteInquiry); 

module.exports=router