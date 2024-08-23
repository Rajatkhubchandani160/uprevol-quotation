const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // Store the name of the icon or a URL
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
