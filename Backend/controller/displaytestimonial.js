const testimonialSchema=require('../models/Testimonial')

const displaytestimonial =async(req,res)=>{
    try {
        const testimonials = await testimonialSchema.find();
        res.status(200).json(testimonials);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }

}
module.exports=displaytestimonial