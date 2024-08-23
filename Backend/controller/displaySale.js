const saleModel = require('../models/Sale');

const displaySale = async (req, res) => {
    try {
        const sales = await saleModel.find();
        res.status(200).json({ success: true, data: sales });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

module.exports = displaySale;
