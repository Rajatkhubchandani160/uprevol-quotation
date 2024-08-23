const testimonialSchema=require('../models/Testimonial')
const addtestimonial=async(req,res)=>{
    try {
        const testimonial = new testimonialSchema(req.body);
        await testimonial.save();
        res.status(201).json(testimonial);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}
module.exports=addtestimonial