const mongoose=require('mongoose')

const bannerModel=new mongoose.Schema({
    title: { type: String, required: true },
        imageUrl: { type: String, required: true },
        createdBy: { type: mongoose.Types.ObjectId, ref: 'user', required: true }
},{
    Timestamp: true
})

module.exports = mongoose.model("Banners",bannerModel)
