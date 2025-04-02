const express =require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path')
const cookieParser=require('cookie-parser')
const profile=require('./routes/ProfileRoutes/profile.js')
const product=require('./routes/MarketRoutes/productRoutes.js')
const order=require('./routes/MarketRoutes/order.js')
const payment=require('./routes/MarketRoutes/paymentRoutes.js')
const repairSharaf=require('./routes/CarRepairRoutes/Service.route.js')
const bookingsharaf=require('./routes/CarRepairRoutes/Booking.route.js')
const yassientowing=require('./routes/TowingRoutes/towing_service.route.js')
const yassienuserDetail=require('./routes/TowingRoutes/userDetail.route.js')
app.use(express.json())
app.use(cookieParser())

dotenv.config({path:path.join(__dirname,"config/config.env")});
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/',profile);
app.use('/',product);
app.use('/',order);
app.use('/',payment);
app.use('/',repairSharaf);
app.use('/',bookingsharaf);
app.use('/',yassientowing);
app.use('/',yassienuserDetail);
module.exports=app;