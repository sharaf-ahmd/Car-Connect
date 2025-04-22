const User =require('../../models/ProfileModel/userModel.js');
const sendToken=require('../../utils/ProfileUtils/jasonWebToken.js')
const crypto=require('crypto')
const nodemailer=require('nodemailer')




//register user
exports.registerUser=async(req,res,next)=>{
    const {name,phoneNo,password,email}=req.body;
    try {
        const user=await User.create({name,phoneNo,password,email});
      
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
    const {name,phoneNo,password,email}=req.body;
     const role="supplier"
    try {
        const user=await User.create({name,phoneNo,password,role,email});
      
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

    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'rifdhi9@gmail.com',
            pass:'pass',
        }
    })
    
    const mailOptions={
        from:'rifdhi9@gmail.com',
        to:user.email,
        subject:"Login success",
        text:"Login success to "
    }
    sender.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error)
        }
       
    })
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
//get user profile
exports.getUserProfile=async(req,res,next)=>{
    const user=await User.findById(req.user.id)
    
    res.status(200).json({
        success:true,
        user,
    })
}
exports.updateProfile = async (req, res, next)=>{
    let newUserData={
        name:req.body.name
    }
    
    const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,

    })
    res.status(200).json({
        success:true,
        user
    })
}

exports.changePassword  = async (req, res, next)=>{
    const user=await User.findById(req.user.id).select('+password');
    if(!await user.isValidPassword(req.body.oldPassword)){
        return res.status(401).json({
            success:false,
            message:"Old password is incorrect"
        })
    }
    user.password=req.body.password;
    await user.save();
    res.status(200).json({
        success:true,
    })
}