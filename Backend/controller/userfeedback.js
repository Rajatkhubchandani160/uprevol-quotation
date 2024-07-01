const Feedback = require("../models/feedbackmodel");

const userfeedback =async (req,res)=>{
    try {
        const { name, email, phone, message } = req.body;
    
        // Create a new feedback instance
        const newFeedback = new Feedback({
          name,
          email,
          phone,
          message
        });
    
        // Save feedback to the database
        const savedFeedback = await newFeedback.save();
    
        res.status(201).json({
          message:"Feedback Saved",
          success:true,
          error:false,
          data:savedFeedback
        });
      } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Server error' });
      }

}
module.exports = userfeedback