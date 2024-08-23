const WhyChooseUsSchema=require('../models/WhychooseUs')
const displaywhychooseus =async(req,res)=>{
    try {
        const items = await WhyChooseUsSchema.find();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}
module.exports=displaywhychooseus