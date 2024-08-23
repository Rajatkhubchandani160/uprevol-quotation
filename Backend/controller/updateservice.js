const serviceModel=require('../models/servicePage')
const updateservice=async(req,res)=>{
    try {
        const service = await serviceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(service);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}
module.exports=updateservice