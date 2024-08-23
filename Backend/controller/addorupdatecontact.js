const ContactInfo=require('../models/Contactmodel')
const addorupdatecontact =async(req,res)=>{
    try {
        const existingContactInfo = await ContactInfo.findOne(); // Check if data already exists

        if (existingContactInfo) {
            // Update existing contact information
            const updatedContactInfo = await ContactInfo.findByIdAndUpdate(existingContactInfo._id, req.body, { new: true });
            return res.status(200).json({ success: true, data: updatedContactInfo });
        } else {
            // Add new contact information
            const newContactInfo = new ContactInfo(req.body);
            const savedContactInfo = await newContactInfo.save();
            return res.status(201).json({ success: true, data: savedContactInfo });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
module.exports=addorupdatecontact