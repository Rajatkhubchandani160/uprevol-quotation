const productmodel = require("../models/productmodel");

const searchProduct = async (req, res) => {
    try {
        const querydata = req.query.q;
        const reg = new RegExp(querydata, "i", "g");
        const product = await productmodel.find({
            "$or": [{ productName: reg }, { category: reg }]
        });
        res.json({
            data: product,
            success: true,
            error: false
        });
    } catch (err) {
        res.json({
            message: err.message,
            error: true,
            success: false,
        });
    }
};

module.exports = searchProduct;
