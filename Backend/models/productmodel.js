

const mongoose=require('mongoose')
// mongoose.connect('mongodb:127.0.0.1:27017//Uprevol')
const productSchema=mongoose.Schema({
    productName:String,
    brandName:String,
    category:String,
    productImage:[],
    description:String,
    price:Number,
    selling:Number,
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
  
},{
    Timestamp: true
})

module.exports = mongoose.model("product",productSchema)
