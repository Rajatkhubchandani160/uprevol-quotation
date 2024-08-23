const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Let's get in touch",
  },
  description: {
    type: String,
    required: true,
    default: "At DE, we’re dedicated to providing top-quality electronics and exceptional service. Whether you have questions or need a quote, our team is here to help. Contact us using the form below or reach out directly. We look forward to serving you!",
  },
  address: {
    type: String,
    required: true,
    default: "92 Cherry Drive Uniondale, NY 11553",
  },
  email: {
    type: String,
    required: true,
    default: "lorem@ipsum.com",
  },
  phone: {
    type: String,
    required: true,
    default: "+91-7378162336",
    validate: {
      validator: function (v) {
        return /\+?[0-9]{1,4}?[-. ]?[0-9]{1,3}?[-. ]?[0-9]{3}[-. ]?[0-9]{4,6}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  socialLinks: [
    {
      platform: {
        type: String,
        enum: ['facebook', 'twitter', 'instagram', 'linkedin', 'whatsapp'],
        required: true,
      },
      url: {
        type: String,
        required: true,
        default: "#",
      }
    }
  ]
}, {
  timestamps: true,
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema);
