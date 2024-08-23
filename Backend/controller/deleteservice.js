const serviceModel=require('../models/servicePage')

const deleteservice = async (req, res) => {
  try {
      const serviceId = req.params.id;
      const deletedService = await serviceModel.findByIdAndDelete(serviceId);
      if (!deletedService) {
          return res.status(404).json({ success: false, message: 'Service not found' });
      }
      res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
      console.error('Failed to delete service', error);
      res.status(500).json({ success: false, message: 'Failed to delete service' });
  }
};



module.exports=deleteservice