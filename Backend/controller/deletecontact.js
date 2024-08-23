const ContactInfo=require('../models/Contactmodel')
const deletecontact=async(req,res)=>{
    try {
        const contactInfoId = req.params.id;
        const deletedContactInfo = await ContactInfo.findOneAndDelete(contactInfoId); // Delete the single document

        if (!deletedContactInfo) {
            return res.status(404).json({ success: false, message: 'Contact information not found' });
        }

        return res.status(200).json({ success: true, message: 'Contact information deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
module.exports=deletecontact