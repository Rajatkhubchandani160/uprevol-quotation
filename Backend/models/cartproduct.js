

const mongoose=require('mongoose')

// mongoose.connect('mongodb:127.0.0.1:27017//Uprevol')
const cartSchema=mongoose.Schema({
   productId:{
        ref : 'product',
        type : String,
   },
   quantity:{
    type:Number,
   },
   category:String,
   userId :String,
},{
    Timestamp: true
})

module.exports = mongoose.model("AddToCart",cartSchema)
