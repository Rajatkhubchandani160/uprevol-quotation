const saleModel = require('../models/Sale');

const addSale = async (req, res) => {
    try {
        // Check the number of existing sales
        const saleCount = await saleModel.countDocuments();
        if (saleCount >= 5) {
            return res.status(400).json({ success: false, message: 'Maximum of 5 sales allowed.' });
        }

        const newSale = new saleModel(req.body);
        await newSale.save();

        res.status(201).json({ success: true, data: newSale });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

module.exports = addSale;
