const bannerModel = require('../models/bannermodel'); // Adjust the path to your Banner model

const deleteBanner = async (req, res) => {
    try {
        const bannerId = req.params.id;
        const deletedBanner = await bannerModel.findByIdAndDelete(bannerId);
        if (!deletedBanner) {
            return res.status(404).json({ success: false, message: 'Banner not found' });
        }
        res.json({ success: true, message: 'Banner deleted successfully' });
    } catch (error) {
        console.error('Failed to delete banner', error);
        res.status(500).json({ success: false, message: 'Failed to delete banner' });
    }
};

module.exports = deleteBanner;
