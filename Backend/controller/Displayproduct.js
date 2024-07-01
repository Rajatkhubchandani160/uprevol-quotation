const productModel = require('../models/productmodel') 
const Displayproduct =async(req,res)=>{
    try{
        const allproduct=await productModel.find().sort({createdAt : -1})
        // console.log("All products are :",allproduct)
        res.json({
            message:"All product",
            success:true,
            error:false,
            data : allproduct
        })

    }catch(err){
        res.json({
            message:err.message,
            error:err || err.message,
            success:false,
        })
        
    }
}
module.exports = Displayproduct