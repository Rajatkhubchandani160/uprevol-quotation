// controllers/getBanners.js
const bannerModel = require("../models/bannermodel");

const displaybanners = async (req, res) => {
    try {
        const banners = await bannerModel.find().populate('createdBy', 'username'); 
        res.status(200).json({
            success: true,
            data: banners
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = displaybanners;