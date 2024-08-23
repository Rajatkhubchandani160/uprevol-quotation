const saleModel = require('../models/Sale');

const editSale = async (req, res) => {
    try {
        const sale = await saleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sale) return res.status(404).json({ success: false, message: 'Sale not found' });
        res.status(200).json({ success: true, data: sale });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

module.exports = editSale;
