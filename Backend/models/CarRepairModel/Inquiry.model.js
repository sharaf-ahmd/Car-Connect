const mongoose =require("mongoose")


const inquirySchema = new mongoose.Schema({
    user: { type: String, required: true },
    email:{type:String, required:true}, 
    message: { type: String, required: true },
    status: { type: String, default: "pending" },
    response: { type: String }, 
}, {
    timestamps: true,
});



let Inquiry = mongoose.model("Inquiry", inquirySchema);
module.exports=Inquiry;