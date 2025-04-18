const mongoose =require ("mongoose");
const Booking = require("../../models/CarRepairModel/Booking.model");

exports.getBooking = async (req, res) => {
    try {
      const booking = await Booking.find({});
      res.status(200).json({success:true, data: booking});
    } catch (error) {
      console.log("Error in fetching bookings", error);
      res.status(404).json({success:false, message: "Error in fetching bookings"});
    }
  }

  
  exports.createbooking = async (req, res) => {
    const booking = req.body;
    
      booking.date = new Date(booking.date)
      if (isNaN(booking.date)) {
        return res.status(400).json({ success: false, message: 'Invalid date format' });
      }
    
    if(!booking.customer || !booking.date || !booking.time || !booking.location || !booking.contact){
      return res.status(400).json({error: 'Please fill all required fields'});
    }

    const newbooking=new Booking(booking);
   

    try {
        await newbooking.save();
        res.status(201).json({success:true, data:newbooking})
    } catch (error) {
        res.status(500).json({success:false, message: "Server Error"});
    }
  }

  exports.deleteBooking = async (req, res) => {
    const {id}= req.params;
   
    try {
      await Booking.findByIdAndDelete(id);
      res.status(200).json({success:true, message: 'Booking cancelled successfully'});
    } catch (error) {
      res.status(500).json({success:false, message: "Booking not found"});
    }


  }  


  exports.updateBooking = async (req, res) => {
    const {id}=req.params;
    const booking =req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send('No service with that id');
    }

    try {
      const updatedBooking = await Booking.findByIdAndUpdate(id, booking, {new:true});  
        res.status(200).json({success:true, data: updatedBooking});
        }
        catch (error) {
        res.status(500).json({success:false, message: "Server Error"});
        }
    
    }