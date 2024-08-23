const testimonialSchema=require('../models/Testimonial')
const deletetestimonial=async(req,res)=>{
    try {
        const testimonial = await testimonialSchema.findByIdAndDelete(req.params.id);
        if (!testimonial) {
          return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.status(200).json({ message: 'Testimonial deleted successfully' });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}
module.exports=deletetestimonial