// controllers/uploadbanner.js
const bannermodel = require("../models/bannermodel");
const uploadBannerPermission = require('../helpers/permission');

async function UploadBannerController(req, res) {
    try {
        const sessionUserId = req.userId;
        if (!uploadBannerPermission(sessionUserId)) {
            throw new Error('Permission denied');
        }

        const bannerData = {
            ...req.body,
            createdBy: sessionUserId
        };

        const uploadBanner = new bannermodel(bannerData);
        const saveBanner = await uploadBanner.save();
        console.log("Banners",saveBanner)
        res.status(201).json({
            message: "Banner successfully uploaded",
            error: false,
            success: true,
            data: saveBanner
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = UploadBannerController;
