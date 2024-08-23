const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

saleSchema.methods.isExpired = function () {
    return new Date() > this.expirationDate;
};

module.exports = mongoose.model('Sale', saleSchema);
