const WhyChooseUsSchema=require('../models/WhychooseUs')
const deleteWhyChooseUs = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await WhyChooseUsSchema.findByIdAndDelete(id);
        if (result) {
            res.status(200).json({ success: true, message: "Why Choose Us entry deleted successfully." });
        } else {
            res.status(404).json({ success: false, message: "Why Choose Us entry not found." });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete Why Choose Us entry.", error: error.message });
    }
};
module.exports=deleteWhyChooseUs