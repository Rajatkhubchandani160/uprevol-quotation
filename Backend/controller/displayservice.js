const serviceModel=require('../models/servicePage')
const displayservice=async(req,res)=>{
    try {
        const services = await serviceModel.find();
        res.status(200).json(services);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
}
module.exports=displayservice