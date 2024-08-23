const serviceModel=require('../models/servicePage')
const addService = async (req, res) => {
  try {
      const newService = new serviceModel(req.body);
      const savedService = await newService.save();
      res.status(201).json({ success: true, message: 'Service added successfully', service: savedService });
  } catch (error) {
      console.error('Failed to add service', error);
      res.status(500).json({ success: false, message: 'Failed to add service' });
  }
};
module.exports=addService