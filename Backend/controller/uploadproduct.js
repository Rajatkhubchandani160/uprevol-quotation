const uploadproductpermission = require("../helpers/permission");
const productmodel = require("../models/productmodel");
const usermodel = require("../models/usermodel");

async function UploadProductController(req, res) {
    try {
        const sessionuserId = req.userId;
        if (!uploadproductpermission(sessionuserId)) {
            throw new Error('permission denied');
        }

        // Add session user ID to the product data
        const productData = {
            ...req.body,
            user: sessionuserId
        };

        const uploadproduct = new productmodel(productData);
        // console.log("product ki id",uploadproduct._id);
        let userdata =await usermodel.findOne({_id: sessionuserId})
        await userdata.products.push(uploadproduct._id)
        await userdata.save()
        const savproduct = await uploadproduct.save();
        
        res.status(201).json({
            message: "Product successfully Uploaded",
            error: false,
            success: true,
            data: savproduct
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = UploadProductController;
