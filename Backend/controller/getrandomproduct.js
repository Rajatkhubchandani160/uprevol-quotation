
const productModel = require('../models/productmodel');

const getRandomProducts = async (req, res) => {
    try {
        const categories = await productModel.find().distinct("category");

        if (categories.length === 0) {
            return res.status(404).json({
                message: "No categories found",
                success: false,
            });
        }

        // If there are exactly 4 categories, return products from all categories
        const selectedCategories = categories.length <= 4 ? categories : getRandomItems(categories, 4);

        const productsByCategory = await Promise.all(
            selectedCategories.map(async (category) => {
                const product = await productModel.findOne({ category }).sort({ createdAt: -1 });
                return product;
            })
        );

        res.json({
            message: `Products from ${categories.length <= 4 ? "all" : "randomly selected"} categories`,
            data: productsByCategory,
            success: true,
            error: false,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            error: err || err.message,
            success: false,
        });
    }
};

// Utility function to get random items from an array
const getRandomItems = (arr, n) => {
    const result = [];
    const usedIndices = new Set();

    while (result.length < n) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(randomIndex)) {
            result.push(arr[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return result;
};

module.exports = { getRandomProducts };
