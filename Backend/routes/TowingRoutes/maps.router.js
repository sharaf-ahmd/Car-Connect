const express=require('express');
const { getDistance } =require("../../controllers/TowingController/maps.controller");

const router = express.Router();

router.route("/api/get/distance").post(getDistance);

module.exports=router