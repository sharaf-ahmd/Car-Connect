
import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";




const servicesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vendor:{type: String, required: true},
    location: { type: String, required: true },
    distance: { type: Number, required: true },
    price: { type: Number, required: true },
    type:{ type: String, required: true },
    rating:{ type: Number, required: true },

},{
    timestamps: true,
});

const Service = mongoose.model("Service", servicesSchema);
export default Service;
