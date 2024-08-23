const ContactInfo=require('../models/Contactmodel')
const displaycontact=async(req,res)=>
{
    try {
        const contactInfo = await ContactInfo.find()
        if (!contactInfo) {
            return res.status(404).json({ success: false, message: 'Contact information not found' });
        }
        return res.status(200).json({ success: true, data: contactInfo });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
   

}
module.exports=displaycontact