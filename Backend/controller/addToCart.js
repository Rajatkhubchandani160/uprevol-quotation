const cartproduct = require("../models/cartproduct");
const productModel =require("../models/productmodel")
const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const currentUser = req.userId;

    if (!productId) {
      return res.json({
        message: "Product ID is missing",
        success: false,
        error: true
      });
    }

    // console.log("cart ke liye Product Id :", productId);
   
    const isProductAvailable = await cartproduct.findOne({ productId});
    // console.log("is Available",isProductAvailable)
    if (isProductAvailable) {
      return res.json({
        message: "Product Already Added",
        success: false,
        error: true
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser
    };

    const AddNewProductToCart = new cartproduct(payload);
    const saveProduct = await AddNewProductToCart.save();
    console.log("save cart product :",saveProduct)
    console.log("Add new product ",AddNewProductToCart)
    res.json({
      message: "Product Added in cart",
      data: saveProduct,
      success: true,
      error: false
    });
  } catch (err) {
    res.json({
      message: err?.message,
      error: err || err.message,
      success: false,
    });
  }
};

module.exports = addToCart;
