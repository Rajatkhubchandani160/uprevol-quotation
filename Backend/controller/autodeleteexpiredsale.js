const saleModel = require('../models/Sale');

const autoDeleteExpiredSales = async (req, res) => {
    try {
        const expiredSales = await saleModel.find({
            expirationDate: { $lt: new Date() }
        });

        if (expiredSales.length > 0) {
            await saleModel.deleteMany({ _id: { $in: expiredSales.map(sale => sale._id) } });
            console.log(`Auto-deleted ${expiredSales.length} expired sales.`);
        }

        res.status(200).json({ success: true, message: `${expiredSales.length} expired sales deleted.` });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = autoDeleteExpiredSales;
