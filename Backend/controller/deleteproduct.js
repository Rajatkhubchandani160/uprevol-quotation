const productModel = require('../models/productmodel');

const deleteProduct = async (req, res) => {
  try {
      const productId = req.params.id;
      const deletedProduct = await productModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
          return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
      console.error('Failed to delete product', error);
      res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
};

module.exports = deleteProduct;
