const WhyChooseUsSchema=require('../models/WhychooseUs')
const addwhychooseus =async(req,res)=>{
    try {
        const { title, description } = req.body;
        const newItem = new WhyChooseUsSchema({ title, description });
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
module.exports=addwhychooseus