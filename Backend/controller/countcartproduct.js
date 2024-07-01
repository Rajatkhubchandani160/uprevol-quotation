const cartproduct = require("../models/cartproduct")

const countcartproduct = async (req, res) => {
    try {
        const userId = req.userId;
        const count = await cartproduct.countDocuments({ userId: userId });
        res.json({
            data: {
                count: count
            },
            success: true,
            error: false
        });

    } catch (err) {
        res.json({
            message: err.message,
            error: err || err.message,
            success: false,
        });
    }
}

module.exports = countcartproduct;
