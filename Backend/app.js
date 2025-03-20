const express =require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path')
const cookieParser=require('cookie-parser')
const profile=require('../Backend/routes/ProfileRoutes/profile.js')
const product=require('../Backend/routes/MarketRoutes/productRoutes.js')
app.use(express.json())
app.use(cookieParser())

dotenv.config({path:path.join(__dirname,"config/config.env")});
app.use('/',profile);
app.use('/',product)
module.exports=app;