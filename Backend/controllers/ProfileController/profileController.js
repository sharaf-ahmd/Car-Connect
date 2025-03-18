const User =require('../../models/ProfileModel/userModel.js');
const sendToken=require('../../utils/ProfileUtils/jasonWebToken.js')

//register user
exports.registerUser=async(req,res,next)=>{
    const {name,phoneNo,password}=req.body;
    try {
        const user=await User.create({name,phoneNo,password});
      
        const token=user.getJwtToken();
        res.status(201).json({
            success:true,
            user,
            token
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message:"Phone Number already in use",
            });
        }
        res.status(500).json({
            success: false,
            message: error,
        });
    }
}

//register supplier
exports.registerSupplier=async(req,res,next)=>{
    const {name,phoneNo,password}=req.body;
     const role="supplier"
    try {
        const user=await User.create({name,phoneNo,password,role});
      
        const token=user.getJwtToken();
        res.status(201).json({
            success:true,
            user,
            token
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message:"Phone Number already in use",
            });
        }
        res.status(500).json({
            success: false,
            message: error,
        });
    }
}

//login user
exports.loginUser=async(req,res,next)=>{
    const {phoneNo,password}=req.body;
    if(!phoneNo || !password){
        return next(
            res.status(401).json({
                success:false,
                message:"Enter Phone number and Password",
            })
        )
    }
    const user=await User.findOne({phoneNo}).select('+password');
    if(!user){
        return res.status(401).json({
            success: false,
            message: "Invalid Phone number or Password",
        })
    }
    if(!await user.isValidPassword(password)){
        return res.status(401).json({
            success: false,
            message: "Invalid Phone no or Password",
        });
    }
    sendToken(user,201,res);
}

//logout

exports.logoutUser=(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    .status(200).json({
        success:true,
        message:"Logged Out",
    })
}