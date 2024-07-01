const cartproduct = require("../models/cartproduct");

const updateAddToCart = async (req, res) => {
  try {
    const cartproductId = req.body._id;
    const qty = req.body.quantity;

    if (!cartproductId) {
      return res.status(400).json({
        message: "Cart product ID is required",
        success: false,
        error: true,
      });
    }

    const updatedCartProduct = await cartproduct.updateOne(
      { _id: cartproductId },
      { $set: { quantity: qty } }
    );

    res.json({
      message: "Cart Updated",
      data: updatedCartProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message,
      error: true,
      success: false,
    });
  }
};

module.exports = updateAddToCart;
